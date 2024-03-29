import Tooltip from "@/global/Tooltip";

import {
  PencilSquareIcon,
  FolderPlusIcon,
  ShareIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

enum ButtonType {
  Edit = "Edit",
  Folder = "Add to Folder",
  Share = "Share",
  More = "More",
}

type Props = {
  authorImage: string;
  author: string;
};

const Settings = ({ author, authorImage }: Props) => {
  return (
    <div className=" mb-6 flex flex-col justify-between gap-y-4 xxs:flex-row">
      <div className="flex items-center gap-x-2">
        <img
          className="inline-block h-8 w-8 rounded-full"
          src={authorImage}
          alt="author profile picture"
        />
        <div className="text-base font-semibold">{author}</div>
      </div>
      <div className="flex gap-x-2">
        <SettingButton type={ButtonType.Edit} />
        <SettingButton type={ButtonType.Folder} />
        <SettingButton type={ButtonType.Share} />
        <SettingButton type={ButtonType.More} />
      </div>
    </div>
  );
};

const SettingButton = ({ type }: { type: ButtonType }) => {
  const getIcon = (iconType: ButtonType) => {
    switch (iconType) {
      case ButtonType.Edit:
        return (
          <PencilSquareIcon
            strokeWidth={2}
            className="h-6 w-6 stroke-slate-400"
          />
        );
      case ButtonType.Folder:
        return (
          <FolderPlusIcon
            strokeWidth={2}
            className="h-6 w-6 stroke-slate-400"
          />
        );
      case ButtonType.Share:
        return (
          <ShareIcon strokeWidth={2} className="h-6 w-6 stroke-slate-400" />
        );
      case ButtonType.More:
        return (
          <EllipsisVerticalIcon
            strokeWidth={2}
            className="h-6 w-6 stroke-slate-400"
          />
        );
    }
  };

  return (
    <Tooltip text={type} marginTop={10}>
      <button className="neumorphism h-full w-full rounded-full p-2 transition-all ease-in-out">
        {getIcon(type)}
      </button>
    </Tooltip>
  );
};

export default Settings;
