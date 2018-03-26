/**
 * API V1
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The InlineResponse422 model module.
* @module model/InlineResponse422
* @version 1.0.0
*/
export default class InlineResponse422 {
    /**
    * Constructs a new <code>InlineResponse422</code>.
    * @alias module:model/InlineResponse422
    * @class
    * @param status {module:model/InlineResponse422.StatusEnum}
    * @param errors {Array.<String>}
    */

    constructor(status, errors) {





        this['status'] = status;this['errors'] = errors;


    }

    /**
    * Constructs a <code>InlineResponse422</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse422} obj Optional instance to populate.
    * @return {module:model/InlineResponse422} The populated <code>InlineResponse422</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse422();





            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/InlineResponse422.StatusEnum} status
    */
    status = undefined;
    /**
    * @member {Array.<String>} errors
    */
    errors = undefined;






    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {

        /**
         * value: "error"
         * @const
         */
        "error": "error"
    };



}

