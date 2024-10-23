import React, { FunctionComponent } from 'react';

interface FileItemProps {
    file: File;
}

export const FileItem: FunctionComponent<Partial<FileItemProps>> = ({ file }) => {
    return (
        <div className="flex items-center justify-between w-full p-4 bg-gray-100 border border-slate-800" >
            <p>{file?.name}</p>
        </div>
    );
}