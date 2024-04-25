import { Components, useInputContext } from "leva/plugin";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { DropZone, FileContainer, Instructions, Remove } from "./styled-file";

export function FileComponent() {
  const { label, value, onUpdate, disabled } = useInputContext();

  const onDrop = useCallback(
    (acceptedFiles: string | File[]) => {
      if (acceptedFiles.length) onUpdate(acceptedFiles[0]);
    },
    [onUpdate]
  );

  const clear = useCallback(
    (e: { stopPropagation: () => void }) => {
      e.stopPropagation();
      onUpdate(undefined);
    },
    [onUpdate]
  );

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    maxFiles: 1,
    onDrop,
    disabled,
  });

  const { Label, Row } = Components;
  return (
    <Row input>
      <Label>{label}</Label>
      <FileContainer fullwidth={!!value}>
        {value && <div>{value instanceof File ? value.name : "file"}</div>}
        {value && <Remove onClick={clear} disabled={!value} />}
        {!value && (
          <DropZone {...getRootProps({ isDragAccept })}>
            <input {...getInputProps()} />
            <Instructions>
              {isDragAccept ? "drop file" : "click or drop"}
            </Instructions>
          </DropZone>
        )}
      </FileContainer>
    </Row>
  );
}
