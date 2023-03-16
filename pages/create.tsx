import Navbar from "@/components/global/Navbar";
import React, { useState, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import StyledButton from "@/components/global/StyledButton";
import { Term } from "@/components/sets";

type Props = {};
const Create = (props: Props) => {
  const [tags, setTags] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const createTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tag = e.target.value.split(",");
    if (tag.length < 2) return;
    if (tag[0] === "") {
      e.target.value = "";
      return;
    }
    if (tags.includes(tag[0])) {
      e.target.value = "";
      return;
    }

    setTags([...tags, tag[0]]);
    e.target.value = "";
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col gap-y-16 lg:px-64">
        <div className="flex w-full justify-center">
          <div className="flex w-full flex-col">
            <div className="flex justify-between">
              <h1 className="text-4xl font-semibold">Create study set</h1>

              <button
                type="button"
                className="rounded-lg font-semibold text-primary transition-colors duration-200  hover:text-secondary hover:underline"
                onClick={() => openModal()}
              >
                Import
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-y-4">
              <Form>
                <FormColumn>
                  <FormInput title="Title" type="text" />

                  <label className="text-lg font-semibold">Tags</label>
                  <div className="flex w-[40rem] flex-wrap gap-x-4 overflow-clip rounded-lg border-2 border-slate-200 px-4 outline-secondary">
                    {tags.map((tag, index) => (
                      <Tag key={index} tag={tag} removeTag={removeTag} />
                    ))}
                    <input
                      title="Tags"
                      className="flex-grow py-4 outline-none"
                      placeholder="Seperate tags with commas"
                      onChange={createTag}
                      onKeyDown={(e) => {
                        if (
                          e.key === "Backspace" &&
                          e.currentTarget.value === ""
                        ) {
                          setTags(tags.slice(0, tags.length - 1));
                        }
                      }}
                    />
                  </div>

                  <FormSelect
                    title="Visibility"
                    options={[
                      { value: "public", label: "Public" },
                      { value: "private", label: "Private" },
                      { value: "unlisted", label: "Unlisted" },
                    ]}
                  />
                </FormColumn>

                <FormColumn>
                  <label className="text-lg font-semibold">Description</label>
                  <textarea
                    title="Description"
                    className="h-full w-[40rem] resize-none rounded-lg border-2 border-slate-200 p-4 outline-secondary"
                  />
                </FormColumn>
              </Form>

              <StyledButton text="Create" />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-x-4">
            <h1 className="text-3xl font-semibold">Terms</h1>
            <div className="inline-block rounded-2xl bg-gray-400 px-2 font-medium text-white">
              19 TOTAL
            </div>
          </div>

          <Term term="Term" definition="Definition" />
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:bg-blue-200"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const Form = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex justify-between">{children}</div>;
};

const FormColumn = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-y-2">{children}</div>;
};

const FormInput = ({
  title,
  className,
  ...props
}: {
  title: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <label className="text-lg font-semibold">{title}</label>
      <input
        title={title}
        className={`w-[40rem] rounded-lg border-2 border-slate-200 p-4 outline-secondary ${className}`}
        {...props}
      />
    </>
  );
};

const FormSelect = ({
  title,
  options,
}: {
  title: string;
  options: { value: string; label: string }[];
}) => {
  return (
    <>
      <label className="text-lg font-semibold">{title}</label>
      <select
        title={title}
        className="w-[40rem] rounded-lg border-2 border-slate-200 p-4 outline-secondary"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

const Tag = ({ tag, removeTag }: { tag: string; removeTag: Function }) => {
  return (
    <div className="my-2 flex items-center rounded-lg bg-secondary p-2 text-white ">
      <span>{tag}</span>
      <div
        onClick={(e) => {
          removeTag(tag);
        }}
      >
        <XMarkIcon
          strokeWidth={4}
          className="ml-1 h-6 w-6 rounded-full p-1 transition-all ease-in-out hover:cursor-pointer hover:bg-black/30"
        />
      </div>
    </div>
  );
};

export default Create;
