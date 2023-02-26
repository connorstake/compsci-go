export interface Dialog {
    dialogueSequence: string[];
}



export class Module {
    name: string;
    dialog: Dialog;
    videoPath: string;
    startingCode: string;
    completedText: string;
    imagePath: string;

    constructor(name: string, dialog: Dialog, videoPath: string, startingCode: string, completedText: string, imagePath: string = "") {
        this.name = name;
        this.dialog = dialog;
        this.videoPath = videoPath;
        this.startingCode = startingCode;
        this.completedText = completedText;
        this.imagePath = imagePath;
    }

    dialogueByIdx(seq: number): string {
        if (seq >= this.dialog.dialogueSequence.length) {
            return "";
        }
        return this.dialog.dialogueSequence[seq];
    }

    solutionURI(): string {
        return `http://localhost:8000/solution/${this.name}`;
    }

}


