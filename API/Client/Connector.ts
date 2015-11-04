/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Connector {

        /**
         * Connector ID number
         */
        id: number;

        /**
         * Connector lowercase system name
         */
        name: string;

        /**
         * Connector pretty display name
         */
        displayName: string;

        /**
         * URL to the image of the connector logo
         */
        image: string;

        /**
         * URL to a site where one can get this device or application
         */
        getItUrl: string;

        /**
         * Short description
         */
        shortDescription: string;

        /**
         * Long description
         */
        longDescription: string;

        /**
         * enabled
         */
        enabled: boolean;

        /**
         * oauth
         */
        oauth: boolean;
    }

}