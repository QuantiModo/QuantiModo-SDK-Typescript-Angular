/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class Variable {

        /**
         * Variable ID
         */
        id: number;

        /**
         * User-defined variable display name.
         */
        name: string;

        /**
         * Name used when the variable was originally created in the `variables` table.
         */
        originalName: string;

        /**
         * Variable category like Mood, Sleep, Physical Activity, Treatment, Symptom, etc.
         */
        category: string;

        /**
         * Abbreviated name of the default unit for the variable
         */
        unit: string;

        /**
         * Comma-separated list of source names to limit variables to those sources
         */
        sources: string;

        /**
         * Minimum reasonable value for this variable (uses default unit)
         */
        minimumValue: number;

        /**
         * Maximum reasonable value for this variable (uses default unit)
         */
        maximumValue: number;

        /**
         * How to aggregate measurements over time.
         */
        combinationOperation: Variable.CombinationOperationEnum;

        /**
         * Value for replacing null measurements
         */
        fillingValue: number;

        /**
         * The Variable this Variable should be joined with. If the variable is joined with some other variable then it is not shown to user in the list of variables.
         */
        joinWith: string;

        /**
         * Array of Variables that are joined with this Variable
         */
        joinedVariables: Array<Variable>;

        /**
         * Id of the parent variable if this variable has any parent
         */
        parent: number;

        /**
         * Array of Variables that are sub variables to this Variable
         */
        subVariables: Array<Variable>;

        /**
         * How long it takes for a measurement in this variable to take effect
         */
        onsetDelay: number;

        /**
         * How long the effect of a measurement in this variable lasts
         */
        durationOfAction: number;

        /**
         * Earliest measurement time
         */
        earliestMeasurementTime: number;

        /**
         * Latest measurement time
         */
        latestMeasurementTime: number;

        /**
         * When this variable or its settings were last updated
         */
        updated: number;

        /**
         * A value of 1 indicates that this variable is generally a cause in a causal relationship.  An example of a causeOnly variable would be a variable such as Cloud Cover which would generally not be influenced by the behaviour of the user.
         */
        causeOnly: number;

        /**
         * Number of correlations
         */
        numberOfCorrelations: number;

        /**
         * Outcome variables (those with `outcome` == 1) are variables for which a human would generally want to identify the influencing factors.  These include symptoms of illness, physique, mood, cognitive performance, etc.  Generally correlation calculations are only performed on outcome variables.
         */
        outcome: number;

        /**
         * The number of measurements that a given user had for this variable the last time a correlation calculation was performed. Generally correlation values are only updated once the current number of measurements for a variable is more than 10% greater than the measurementsAtLastAnalysis.  This avoids a computationally-demanding recalculation when there's not enough new data to make a significant difference in the correlation.
         */
        measurementsAtLastAnalysis: number;

        /**
         * Number of measurements
         */
        numberOfMeasurements: number;

        /**
         * Last unit
         */
        lastUnit: number;

        /**
         * Last value
         */
        lastValue: number;

        /**
         * Most common value
         */
        mostCommonValue: number;

        /**
         * Most common unit
         */
        mostCommonUnit: number;

        /**
         * Last source
         */
        lastSource: number;
    }

    export module Variable {

        export enum CombinationOperationEnum {  
            MEAN = <any> 'MEAN', 
            SUM = <any> 'SUM',
        }
    }
}