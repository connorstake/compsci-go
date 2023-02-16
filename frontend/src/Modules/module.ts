export interface Dialog {
    dialogueSequence: string[];
}



export class Module {
    name: string;
    dialog: Dialog;
    videoPath: string;
    startingCode: string;

    constructor(name: string, dialog: Dialog, videoPath: string, startingCode: string) {
        this.name = name;
        this.dialog = dialog;
        this.videoPath = videoPath;
        this.startingCode = startingCode;
    }

    dialogueByIdx(seq: number): string {
        return this.dialog.dialogueSequence[seq];
    }

    solutionURI(): string {
        return `http://localhost:8000/solution/${this.name}`;
    }

}