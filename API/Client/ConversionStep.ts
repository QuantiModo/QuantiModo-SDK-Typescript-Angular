/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class ConversionStep {

        /**
         * ADD or MULTIPLY
         */
        operation: ConversionStep.OperationEnum;

        /**
         * This specifies the order of conversion steps starting with 0
         */
        value: number;
    }

    export module ConversionStep {

        export enum OperationEnum {  
            MULTIPLY = <any> 'MULTIPLY', 
            ADD = <any> 'ADD',
        }
    }
}