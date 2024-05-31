import { Card, Divider } from "@nextui-org/react";
import RecorderControls from "./micComponents/RecorderControls";
import RecordedList from "./micComponents/RecordedList";
import useRecorder from "./micComponents/useRecorder";

function MicTest({ onOpenAnother }) {

    const { recorderState, ...handlers } = useRecorder();
    const { audio } = recorderState;

    const openModalNextTest = () => {
        onOpenAnother()
    }

    return (
        <Card className="flex flex-col gap-2 items-center p-10">
            <h1 className="font-bold text-3xl">Grabadora de voz</h1>
            <Divider />
            <div>
                <RecorderControls recorderState={recorderState} handlers={handlers} />
            </div>
            <RecordedList audio={audio} openModalNextTest={openModalNextTest} />
        </Card>
    )
}

export default MicTest