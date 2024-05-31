import { CardBody, Button } from "@nextui-org/react";
import { formatMinutes, formatSeconds } from './utils/format-time'

export default function RecorderControls({ recorderState, handlers }) {

    const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
    const { startRecording, saveRecording, cancelRecording } = handlers;


    return (
        <CardBody >
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    {initRecording && <div className="font-bold">Grabando...</div>}
                    <span>{formatMinutes(recordingMinutes)}</span>
                    <span>:</span>
                    <span>{formatSeconds(recordingSeconds)}</span>
                </div>
                {initRecording && (
                    <div>
                        <Button onClick={cancelRecording}>Dejar de grabar</Button>
                    </div>
                )}
                <div className="start-button-container">
                    {initRecording ? (
                        <Button disabled={recordingSeconds === 0} onClick={saveRecording}>Guardar grabacion</Button>
                    ) : (
                        <Button onClick={startRecording}>Empezar a grabar</Button>
                    )}
                </div>
            </div>
        </CardBody >
    )
}
