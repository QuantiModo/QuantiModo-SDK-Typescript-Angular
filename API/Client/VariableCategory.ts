/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface VariableCategory {

        /**
         * id
         */
        id: number;

        /**
         * Name of the category
         */
        name: string;

        /**
         * Value for replacing null measurements
         */
        fillingValue: number;

        /**
         * Maximum recorded value of this category
         */
        maximumAllowedValue: number;

        /**
         * Minimum recorded value of this category
         */
        minimumAllowedValue: number;

        /**
         * How long the effect of a measurement in this variable lasts
         */
        durationOfAction: number;

        /**
         * How long it takes for a measurement in this variable to take effect
         */
        onsetDelay: number;

        /**
         * How to combine values of this variable (for instance, to see a summary of the values over a month) 0 for sum OR 1 for mean
         */
        combinationOperation: string;

        /**
         * updated
         */
        updated: number;

        /**
         * A value of 1 indicates that this category is generally a cause in a causal relationship.  An example of a causeOnly category would be a category such as Work which would generally not be influenced by the behaviour of the user
         */
        causeOnly: boolean;

        /**
         * Is category public
         */
        _public: number;

        /**
         * outcome
         */
        outcome: boolean;

        /**
         * created_at
         */
        createdAt: Date;

        /**
         * updated_at
         */
        updatedAt: Date;

        /**
         * Image URL
         */
        imageUrl: string;

        /**
         * ID of the default unit for the category
         */
        defaultUnitId: number;
    }

}
