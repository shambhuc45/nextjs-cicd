import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FC } from "react";

interface CkEditorProps {
  editorData: string;
  setEditorData: React.Dispatch<React.SetStateAction<string>>;
  handleOnUpdate: (editor: string, field: string) => void;
}

const CkEditor: FC<CkEditorProps> = ({
  setEditorData,
  editorData,
  handleOnUpdate,
}) => {
  return (
    <CKEditor
      config={{ licenseKey: "GPL" }}
      editor={ClassicEditor}
      data={editorData}
      onChange={(_event, editor) => {
        const data = editor.getData();
        setEditorData(data);
        handleOnUpdate(data, "description");
      }}
      onFocus={() => console.log("Editor focused")}
      onBlur={() => console.log("Editor blurred")}
    />
  );
};

export default CkEditor;
