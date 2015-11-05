/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class CorrelationApi {
        protected basePath = 'https://app.quantimo.do/api/v2';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
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


        public correlationsGet (timestamp?: number, userId?: number, correlation?: number, causeId?: number, effectId?: number, onsetDelay?: number, durationOfAction?: number, numberOfPairs?: number, valuePredictingHighOutcome?: number, valuePredictingLowOutcome?: number, optimalPearsonProduct?: number, vote?: number, statisticalSignificance?: number, causeUnit?: string, causeUnitId?: number, causeChanges?: number, effectChanges?: number, qmScore?: number, error?: string, createdAt?: string, updatedAt?: string, reversePearsonCorrelationCoefficient?: number, predictivePearsonCorrelationCoefficient?: number, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_7> {
            const path = this.basePath + '/correlations';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (timestamp !== undefined) {
                queryParameters['timestamp'] = timestamp;
            }

            if (userId !== undefined) {
                queryParameters['user_id'] = userId;
            }

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

            if (qmScore !== undefined) {
                queryParameters['qm_score'] = qmScore;
            }

            if (error !== undefined) {
                queryParameters['error'] = error;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
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

        public correlationsPost (body?: Correlation, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_8> {
            const path = this.basePath + '/correlations';

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

        public correlationsIdGet (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_8> {
            const path = this.basePath + '/correlations/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling correlationsIdGet');
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

        public correlationsIdPut (id: number, body?: Correlation, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/correlations/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling correlationsIdPut');
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

        public correlationsIdDelete (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/correlations/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling correlationsIdDelete');
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
