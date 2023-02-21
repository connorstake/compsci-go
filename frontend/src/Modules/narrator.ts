import { Module } from "./module";
import { TwoSumModule } from "./twoSum";
import { ValidateSubsequenceModule } from "./validateSubsequence";


export class ModuleSequence {

    private modules: Module[];
    private currentModuleIdx: number;

    constructor(startIdx?: number) {
        this.modules = [new TwoSumModule(), new ValidateSubsequenceModule()]
        this.currentModuleIdx = startIdx ? startIdx : 0;
    }

    current(): Module {
        return this.modules[this.currentModuleIdx];
    }

    incrementModuleIdx() {
        this.currentModuleIdx++;
    }
}


