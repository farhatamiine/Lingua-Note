"use client";

import { useEffect, useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import { Button } from "../ui/button";
import { Mic, StopCircle, UploadCloud } from "lucide-react";

export default function VoiceRecorder({
  onUpload,
  setStatus,
}: {
  onUpload: (url: string) => void;
  setStatus: (status: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [localStatus, setLocalStatus] = useState("idle");

  useEffect(() => {
    setStatus(localStatus);
  }, [localStatus, setStatus]);
  return (
    <ReactMediaRecorder
      audio
      onStop={() => setStatus("stop")}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
        if (status !== localStatus) {
          setLocalStatus(status);
        }
        return (
          <div className="space-y-2">
            <div className="flex items-center gap-2 ">
              <Button
                size="sm"
                variant="outline"
                onClick={startRecording}
                className="px-2 w-1/2"
              >
                <Mic /> Save
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={stopRecording}
                className="px-2 w-1/2 text-red-500"
              >
                <StopCircle /> Stop
              </Button>
              <span className="text-xs text-muted-foreground"></span>
            </div>

            {mediaBlobUrl && (
              <div className="flex items-center justify-between gap-2 bg-muted rounded px-2 py-1">
                <audio
                  src={mediaBlobUrl}
                  controls
                  className="w-full max-w-[200px]"
                />
                <Button
                  size="sm"
                  onClick={() => {
                    setUploading(true);
                    if (mediaBlobUrl) {
                      onUpload(mediaBlobUrl);
                    }
                    setUploading(false);
                  }}
                  disabled={uploading}
                  className="ml-2 flex items-center gap-1"
                >
                  <UploadCloud className="w-4 h-4" />
                  {uploading ? "Envoi..." : "Upload"}
                </Button>
              </div>
            )}
          </div>
        );
      }}
    />
  );
}
