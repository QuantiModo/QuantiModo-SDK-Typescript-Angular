/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface UserVariable {

        /**
         * ID of the parent variable if this variable has any parent
         */
        parentId: number;

        /**
         * client_id
         */
        clientId: string;

        /**
         * ID of variable
         */
        variableId: number;

        /**
         * ID of unit to use for this variable
         */
        defaultUnitId: number;

        /**
         * Minimum reasonable value for this variable (uses default unit)
         */
        minimumAllowedValue: number;

        /**
         * Maximum reasonable value for this variable (uses default unit)
         */
        maximumAllowedValue: number;

        /**
         * Value for replacing null measurements
         */
        fillingValue: number;

        /**
         * The Variable this Variable should be joined with. If the variable is joined with some other variable then it is not shown to user in the list of variables
         */
        joinWith: number;

        /**
         * How long it takes for a measurement in this variable to take effect
         */
        onsetDelay: number;

        /**
         * Estimated duration of time following the onset delay in which a stimulus produces a perceivable effect
         */
        durationOfAction: number;

        /**
         * ID of variable category
         */
        variableCategoryId: number;

        /**
         * updated
         */
        updated: number;

        /**
         * Is variable public
         */
        _public: number;

        /**
         * A value of 1 indicates that this variable is generally a cause in a causal relationship.  An example of a causeOnly variable would be a variable such as Cloud Cover which would generally not be influenced by the behaviour of the user
         */
        causeOnly: boolean;

        /**
         * 0 -> No filling, 1 -> Use filling-value
         */
        fillingType: string;

        /**
         * Number of measurements
         */
        numberOfMeasurements: number;

        /**
         * Number of processed measurements
         */
        numberOfProcessedMeasurements: number;

        /**
         * Number of measurements at last analysis
         */
        measurementsAtLastAnalysis: number;

        /**
         * ID of last Unit
         */
        lastUnitId: number;

        /**
         * ID of last original Unit
         */
        lastOriginalUnitId: number;

        /**
         * Last Value
         */
        lastValue: number;

        /**
         * Last original value which is stored
         */
        lastOriginalValue: number;

        /**
         * ID of last source
         */
        lastSourceId: number;

        /**
         * Number of correlations for this variable
         */
        numberOfCorrelations: number;

        /**
         * status
         */
        status: string;

        /**
         * error_message
         */
        errorMessage: string;

        /**
         * When this variable or its settings were last updated
         */
        lastSuccessfulUpdateTime: Date;

        /**
         * Standard deviation
         */
        standardDeviation: number;

        /**
         * Variance
         */
        variance: number;

        /**
         * Minimum recorded daily value of this variable
         */
        minimumRecordedDailyValue: number;

        /**
         * Maximum recorded daily value of this variable
         */
        maximumRecordedDailyValue: number;

        /**
         * Mean
         */
        mean: number;

        /**
         * Median
         */
        median: number;

        /**
         * Most common Unit ID
         */
        mostCommonUnitId: number;

        /**
         * Most common value
         */
        mostCommonValue: number;

        /**
         * Number of unique daily values
         */
        numberOfUniqueDailyValues: number;

        /**
         * Number of changes
         */
        numberOfChanges: number;

        /**
         * Skewness
         */
        skewness: number;

        /**
         * Kurtosis
         */
        kurtosis: number;

        /**
         * Latitude
         */
        latitude: number;

        /**
         * Longitude
         */
        longitude: number;

        /**
         * Location
         */
        location: string;

        /**
         * created_at
         */
        createdAt: Date;

        /**
         * updated_at
         */
        updatedAt: Date;

        /**
         * Outcome variables (those with `outcome` == 1) are variables for which a human would generally want to identify the influencing factors.  These include symptoms of illness, physique, mood, cognitive performance, etc.  Generally correlation calculations are only performed on outcome variables
         */
        outcome: boolean;

        /**
         * Comma-separated list of source names to limit variables to those sources
         */
        sources: string;

        /**
         * Earliest source time
         */
        earliestSourceTime: number;

        /**
         * Latest source time
         */
        latestSourceTime: number;

        /**
         * Earliest measurement time
         */
        earliestMeasurementTime: number;

        /**
         * Latest measurement time
         */
        latestMeasurementTime: number;

        /**
         * Earliest filling time
         */
        earliestFillingTime: number;

        /**
         * Latest filling time
         */
        latestFillingTime: number;
    }

}