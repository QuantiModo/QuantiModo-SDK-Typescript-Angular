/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class VariableNew {

        /**
         * User-defined variable display name.
         */
        name: string;

        /**
         * Variable category like Mood, Sleep, Physical Activity, Treatment, Symptom, etc.
         */
        category: string;

        /**
         * Abbreviated name of the default unit for the variable
         */
        unit: string;

        /**
         * How to aggregate measurements over time.
         */
        combinationOperation: VariableNew.CombinationOperationEnum;

        /**
         * Parent
         */
        parent: string;
    }

    export module VariableNew {

        export enum CombinationOperationEnum {  
            MEAN = <any> 'MEAN', 
            SUM = <any> 'SUM',
        }
    }
}