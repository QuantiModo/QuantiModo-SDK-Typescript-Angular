/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Credential {

        /**
         * connector_id
         */
        connectorId: number;

        /**
         * attr_key
         */
        attrKey: string;

        /**
         * attr_value
         */
        attrValue: string;

        /**
         * created_at
         */
        createdAt: Date;

        /**
         * updated_at
         */
        updatedAt: Date;
    }

}