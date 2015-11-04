/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Correlation {

        /**
         * id
         */
        id: number;

        /**
         * Time at which correlation was calculated
         */
        timestamp: number;

        /**
         * ID of user that owns this correlation
         */
        userId: number;

        /**
         * Pearson correlation coefficient between cause and effect measurements
         */
        correlation: number;

        /**
         * variable ID of the cause variable for which the user desires correlations
         */
        causeId: number;

        /**
         * variable ID of the effect variable for which the user desires correlations
         */
        effectId: number;

        /**
         * User estimated or default time after cause measurement before a perceivable effect is observed
         */
        onsetDelay: number;

        /**
         * Time over which the cause is expected to produce a perceivable effect following the onset delay
         */
        durationOfAction: number;

        /**
         * Number of points that went into the correlation calculation
         */
        numberOfPairs: number;

        /**
         * cause value that predicts an above average effect value (in default unit for cause variable)
         */
        valuePredictingHighOutcome: number;

        /**
         * cause value that predicts a below average effect value (in default unit for cause variable)
         */
        valuePredictingLowOutcome: number;

        /**
         * Optimal Pearson Product
         */
        optimalPearsonProduct: number;

        /**
         * Vote
         */
        vote: number;

        /**
         * A function of the effect size and sample size
         */
        statisticalSignificance: number;

        /**
         * Unit of Cause
         */
        causeUnit: string;

        /**
         * Unit ID of Cause
         */
        causeUnitId: number;

        /**
         * Cause changes
         */
        causeChanges: number;

        /**
         * Effect changes
         */
        effectChanges: number;

        /**
         * QM Score
         */
        qmScore: number;

        /**
         * error
         */
        error: string;

        /**
         * created_at
         */
        createdAt: Date;

        /**
         * updated_at
         */
        updatedAt: Date;

        /**
         * Correlation when cause and effect are reversed. For any causal relationship, the forward correlation should exceed the reverse correlation
         */
        reversePearsonCorrelationCoefficient: number;

        /**
         * Predictive Pearson Correlation Coefficient
         */
        predictivePearsonCorrelationCoefficient: number;
    }

}