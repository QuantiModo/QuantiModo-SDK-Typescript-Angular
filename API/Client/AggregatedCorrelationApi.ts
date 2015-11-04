/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class AggregatedCorrelationApi {
        private basePath = 'https://app.quantimo.do/api/v2';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(private $http: ng.IHttpService, basePath?: string, private $httpParamSerializer?: (d: any) => any) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }


        public aggregatedCorrelationsGet (correlation?: number, causeId?: number, effectId?: number, onsetDelay?: number, durationOfAction?: number, numberOfPairs?: number, valuePredictingHighOutcome?: number, valuePredictingLowOutcome?: number, optimalPearsonProduct?: number, vote?: number, numberOfUsers?: number, numberOfCorrelations?: number, statisticalSignificance?: number, causeUnit?: string, causeUnitId?: number, causeChanges?: number, effectChanges?: number, aggregateQmScore?: number, createdAt?: string, updatedAt?: string, status?: string, errorMessage?: string, lastSuccessfulUpdateTime?: string, reversePearsonCorrelationCoefficient?: number, predictivePearsonCorrelationCoefficient?: number, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200> {
            const path = this.basePath + '/aggregatedCorrelations';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (correlation !== undefined) {
                queryParameters['correlation'] = correlation;
            }

            if (causeId !== undefined) {
                queryParameters['cause_id'] = causeId;
            }

            if (effectId !== undefined) {
                queryParameters['effect_id'] = effectId;
            }

            if (onsetDelay !== undefined) {
                queryParameters['onset_delay'] = onsetDelay;
            }

            if (durationOfAction !== undefined) {
                queryParameters['duration_of_action'] = durationOfAction;
            }

            if (numberOfPairs !== undefined) {
                queryParameters['number_of_pairs'] = numberOfPairs;
            }

            if (valuePredictingHighOutcome !== undefined) {
                queryParameters['value_predicting_high_outcome'] = valuePredictingHighOutcome;
            }

            if (valuePredictingLowOutcome !== undefined) {
                queryParameters['value_predicting_low_outcome'] = valuePredictingLowOutcome;
            }

            if (optimalPearsonProduct !== undefined) {
                queryParameters['optimal_pearson_product'] = optimalPearsonProduct;
            }

            if (vote !== undefined) {
                queryParameters['vote'] = vote;
            }

            if (numberOfUsers !== undefined) {
                queryParameters['number_of_users'] = numberOfUsers;
            }

            if (numberOfCorrelations !== undefined) {
                queryParameters['number_of_correlations'] = numberOfCorrelations;
            }

            if (statisticalSignificance !== undefined) {
                queryParameters['statistical_significance'] = statisticalSignificance;
            }

            if (causeUnit !== undefined) {
                queryParameters['cause_unit'] = causeUnit;
            }

            if (causeUnitId !== undefined) {
                queryParameters['cause_unit_id'] = causeUnitId;
            }

            if (causeChanges !== undefined) {
                queryParameters['cause_changes'] = causeChanges;
            }

            if (effectChanges !== undefined) {
                queryParameters['effect_changes'] = effectChanges;
            }

            if (aggregateQmScore !== undefined) {
                queryParameters['aggregate_qm_score'] = aggregateQmScore;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
            }

            if (status !== undefined) {
                queryParameters['status'] = status;
            }

            if (errorMessage !== undefined) {
                queryParameters['error_message'] = errorMessage;
            }

            if (lastSuccessfulUpdateTime !== undefined) {
                queryParameters['last_successful_update_time'] = lastSuccessfulUpdateTime;
            }

            if (reversePearsonCorrelationCoefficient !== undefined) {
                queryParameters['reverse_pearson_correlation_coefficient'] = reversePearsonCorrelationCoefficient;
            }

            if (predictivePearsonCorrelationCoefficient !== undefined) {
                queryParameters['predictive_pearson_correlation_coefficient'] = predictivePearsonCorrelationCoefficient;
            }

            if (limit !== undefined) {
                queryParameters['limit'] = limit;
            }

            if (offset !== undefined) {
                queryParameters['offset'] = offset;
            }

            if (sort !== undefined) {
                queryParameters['sort'] = sort;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public aggregatedCorrelationsPost (body?: AggregatedCorrelation, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_1> {
            const path = this.basePath + '/aggregatedCorrelations';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: body,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public aggregatedCorrelationsIdGet (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_1> {
            const path = this.basePath + '/aggregatedCorrelations/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling aggregatedCorrelationsIdGet');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public aggregatedCorrelationsIdPut (id: number, body?: AggregatedCorrelation, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/aggregatedCorrelations/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling aggregatedCorrelationsIdPut');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: path,
                json: true,
                data: body,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public aggregatedCorrelationsIdDelete (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/aggregatedCorrelations/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling aggregatedCorrelationsIdDelete');
            }
            let httpRequestParams: any = {
                method: 'DELETE',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
    }
}
