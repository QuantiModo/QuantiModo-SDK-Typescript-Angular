/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Variable {

        /**
         * id
         */
        id: number;

        /**
         * client_id
         */
        clientId: string;

        /**
         * parent_id
         */
        parentId: number;

        /**
         * Name of the variable
         */
        name: string;

        /**
         * Category of the variable
         */
        variableCategoryId: number;

        /**
         * ID of the default unit of measurement to use for this variable
         */
        defaultUnitId: number;

        /**
         * How to combine values of this variable (for instance, to see a summary of the values over a month) 0 for sum OR 1 for mean
         */
        combinationOperation: string;

        /**
         * filling_value
         */
        fillingValue: number;

        /**
         * maximum_allowed_value
         */
        maximumAllowedValue: number;

        /**
         * minimum_allowed_value
         */
        minimumAllowedValue: number;

        /**
         * onset_delay
         */
        onsetDelay: number;

        /**
         * duration_of_action
         */
        durationOfAction: number;

        /**
         * public
         */
        _public: number;

        /**
         * cause_only
         */
        causeOnly: boolean;

        /**
         * most_common_value
         */
        mostCommonValue: number;

        /**
         * most_common_unit_id
         */
        mostCommonUnitId: number;

        /**
         * standard_deviation
         */
        standardDeviation: number;

        /**
         * variance
         */
        variance: number;

        /**
         * mean
         */
        mean: number;

        /**
         * median
         */
        median: number;

        /**
         * number_of_measurements
         */
        numberOfMeasurements: number;

        /**
         * number_of_unique_values
         */
        numberOfUniqueValues: number;

        /**
         * skewness
         */
        skewness: number;

        /**
         * kurtosis
         */
        kurtosis: number;

        /**
         * status
         */
        status: string;

        /**
         * error_message
         */
        errorMessage: string;

        /**
         * last_successful_update_time
         */
        lastSuccessfulUpdateTime: Date;

        /**
         * created_at
         */
        createdAt: Date;

        /**
         * updated_at
         */
        updatedAt: Date;

        /**
         * product_url
         */
        productUrl: string;

        /**
         * image_url
         */
        imageUrl: string;

        /**
         * price
         */
        price: number;

        /**
         * number_of_user_variables
         */
        numberOfUserVariables: number;

        /**
         * outcome
         */
        outcome: boolean;

        /**
         * minimum_recorded_value
         */
        minimumRecordedValue: number;

        /**
         * maximum_recorded_value
         */
        maximumRecordedValue: number;
    }

}