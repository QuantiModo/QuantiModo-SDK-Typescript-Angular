/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class Correlation {

        /**
         * Pearson correlation coefficient between cause and effect measurements
         */
        correlationCoefficient: number;

        /**
         * ORIGINAL variable name of the cause variable for which the user desires correlations.
         */
        cause: string;

        /**
         * ORIGINAL variable name of the effect variable for which the user desires correlations.
         */
        effect: string;

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
         * Magnitude of the effects of a cause indicating whether it's practically meaningful.
         */
        effectSize: string;

        /**
         * A function of the effect size and sample size
         */
        statisticalSignificance: string;

        /**
         * Time at which correlation was calculated
         */
        timestamp: number;

        /**
         * Correlation when cause and effect are reversed. For any causal relationship, the forward correlation should exceed the reverse correlation.
         */
        reverseCorrelation: number;

        /**
         * 
         */
        causalityFactor: number;

        /**
         * Variable category of the cause variable.
         */
        causeCategory: string;

        /**
         * Variable category of the effect variable.
         */
        effectCategory: string;
    }

}