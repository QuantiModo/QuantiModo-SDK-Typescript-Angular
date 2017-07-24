/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface AggregatedCorrelation {

        /**
         * id
         */
        id: number;

        /**
         * correlation
         */
        correlation: number;

        /**
         * cause_id
         */
        causeId: number;

        /**
         * effect_id
         */
        effectId: number;

        /**
         * onset_delay
         */
        onsetDelay: number;

        /**
         * duration_of_action
         */
        durationOfAction: number;

        /**
         * number_of_pairs
         */
        numberOfPairs: number;

        /**
         * value_predicting_high_outcome
         */
        valuePredictingHighOutcome: number;

        /**
         * value_predicting_low_outcome
         */
        valuePredictingLowOutcome: number;

        /**
         * optimal_pearson_product
         */
        optimalPearsonProduct: number;

        /**
         * vote
         */
        vote: number;

        /**
         * number_of_users
         */
        numberOfUsers: number;

        /**
         * number_of_correlations
         */
        numberOfCorrelations: number;

        /**
         * statistical_significance
         */
        statisticalSignificance: number;

        /**
         * cause_unit
         */
        causeUnit: string;

        /**
         * cause_unit_id
         */
        causeUnitId: number;

        /**
         * cause_changes
         */
        causeChanges: number;

        /**
         * effect_changes
         */
        effectChanges: number;

        /**
         * aggregate_qm_score
         */
        aggregateQmScore: number;

        /**
         * created_at
         */
        createdAt: Date;

        /**
         * updated_at
         */
        updatedAt: Date;

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
         * reverse_pearson_correlation_coefficient
         */
        reversePearsonCorrelationCoefficient: number;

        /**
         * predictive_pearson_correlation_coefficient
         */
        predictivePearsonCorrelationCoefficient: number;
    }

}
