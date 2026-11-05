"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidators = exports.validateEnvelope = void 0;
exports.validateEnvelope = (function () {
    "use strict";
    const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    const stringLength = (string) => /[\uD800-\uDFFF]/.test(string) ? [...string].length : string.length;
    const pattern0 = new RegExp("^((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))T([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(\\.\\d+)?(Z|([+-]\\d{2}:?\\d{2}))$", "u");
    const ref0 = function validate(data) {
        validate.errors = null;
        if (!(typeof data === "object" && data && !Array.isArray(data))) {
            validate.errors = [{ keywordLocation: "#/type", instanceLocation: "#" }];
            return false;
        }
        if (!("id" in data && hasOwn(data, "id"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (!("type" in data && hasOwn(data, "type"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/type" },
            ];
            return false;
        }
        if (!("occurredAt" in data && hasOwn(data, "occurredAt"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/occurredAt" },
            ];
            return false;
        }
        if (!("data" in data && hasOwn(data, "data"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/data" },
            ];
            return false;
        }
        if (!(typeof data.id === "string")) {
            validate.errors = [
                { keywordLocation: "#/properties/id/type", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (data.id.length < 1 || stringLength(data.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/id/minLength",
                    instanceLocation: "#/id",
                },
            ];
            return false;
        }
        if (!(typeof data.type === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/type",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (data.type.length < 1 || stringLength(data.type) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/minLength",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(typeof data.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/type",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/pattern",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data === "object" && data.data && !Array.isArray(data.data))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/type",
                    instanceLocation: "#/data",
                },
            ];
            return false;
        }
        if (!("workspace" in data.data && hasOwn(data.data, "workspace"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace === "object" &&
            data.data.workspace &&
            !Array.isArray(data.data.workspace))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/type",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("id" in data.data.workspace && hasOwn(data.data.workspace, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/required",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/type",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (data.data.workspace.id.length < 1 ||
            stringLength(data.data.workspace.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/minLength",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        return true;
    };
    return ref0;
})();
const validatePaymentCreatedEvent = (function () {
    "use strict";
    const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    const stringLength = (string) => /[\uD800-\uDFFF]/.test(string) ? [...string].length : string.length;
    const pattern0 = new RegExp("^((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))T([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(\\.\\d+)?(Z|([+-]\\d{2}:?\\d{2}))$", "u");
    const ref0 = function validate(data) {
        validate.errors = null;
        if (!(typeof data === "object" && data && !Array.isArray(data))) {
            validate.errors = [{ keywordLocation: "#/type", instanceLocation: "#" }];
            return false;
        }
        if (!("id" in data && hasOwn(data, "id"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (!("type" in data && hasOwn(data, "type"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/type" },
            ];
            return false;
        }
        if (!("occurredAt" in data && hasOwn(data, "occurredAt"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/occurredAt" },
            ];
            return false;
        }
        if (!("data" in data && hasOwn(data, "data"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/data" },
            ];
            return false;
        }
        if (!(typeof data.id === "string")) {
            validate.errors = [
                { keywordLocation: "#/properties/id/type", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (data.id.length < 1 || stringLength(data.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/id/minLength",
                    instanceLocation: "#/id",
                },
            ];
            return false;
        }
        if (!(typeof data.type === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/type",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(data.type === "payment.created")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/const",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(typeof data.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/type",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/pattern",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data === "object" && data.data && !Array.isArray(data.data))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/type",
                    instanceLocation: "#/data",
                },
            ];
            return false;
        }
        if (!("workspace" in data.data && hasOwn(data.data, "workspace"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("payment" in data.data && hasOwn(data.data, "payment"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("ledger" in data.data && hasOwn(data.data, "ledger"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("schema" in data.data && hasOwn(data.data, "schema"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("event" in data.data && hasOwn(data.data, "event"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace === "object" &&
            data.data.workspace &&
            !Array.isArray(data.data.workspace))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/type",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("id" in data.data.workspace && hasOwn(data.data.workspace, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/required",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/type",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (data.data.workspace.id.length < 1 ||
            stringLength(data.data.workspace.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/minLength",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment === "object" &&
            data.data.payment &&
            !Array.isArray(data.data.payment))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/type",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("id" in data.data.payment && hasOwn(data.data.payment, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.payment && hasOwn(data.data.payment, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/type",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (data.data.payment.id.length < 1 ||
            stringLength(data.data.payment.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/minLength",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/type",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (data.data.payment.ik.length < 1 ||
            stringLength(data.data.payment.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/minLength",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger === "object" &&
            data.data.ledger &&
            !Array.isArray(data.data.ledger))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/type",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("id" in data.data.ledger && hasOwn(data.data.ledger, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.ledger && hasOwn(data.data.ledger, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/type",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (data.data.ledger.id.length < 1 ||
            stringLength(data.data.ledger.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/minLength",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/type",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (data.data.ledger.ik.length < 1 ||
            stringLength(data.data.ledger.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/minLength",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema === "object" &&
            data.data.schema &&
            !Array.isArray(data.data.schema))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/type",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("key" in data.data.schema && hasOwn(data.data.schema, "key"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/required",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema.key === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/type",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (data.data.schema.key.length < 1 ||
            stringLength(data.data.schema.key) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/minLength",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event === "object" &&
            data.data.event &&
            !Array.isArray(data.data.event))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/type",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!("occurredAt" in data.data.event && hasOwn(data.data.event, "occurredAt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/type",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.data.event.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/pattern",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        return true;
    };
    return ref0;
})();
const validatePaymentCheckoutEvent = (function () {
    "use strict";
    const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    const stringLength = (string) => /[\uD800-\uDFFF]/.test(string) ? [...string].length : string.length;
    const pattern0 = new RegExp("^((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))T([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(\\.\\d+)?(Z|([+-]\\d{2}:?\\d{2}))$", "u");
    const ref0 = function validate(data) {
        validate.errors = null;
        if (!(typeof data === "object" && data && !Array.isArray(data))) {
            validate.errors = [{ keywordLocation: "#/type", instanceLocation: "#" }];
            return false;
        }
        if (!("id" in data && hasOwn(data, "id"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (!("type" in data && hasOwn(data, "type"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/type" },
            ];
            return false;
        }
        if (!("occurredAt" in data && hasOwn(data, "occurredAt"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/occurredAt" },
            ];
            return false;
        }
        if (!("data" in data && hasOwn(data, "data"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/data" },
            ];
            return false;
        }
        if (!(typeof data.id === "string")) {
            validate.errors = [
                { keywordLocation: "#/properties/id/type", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (data.id.length < 1 || stringLength(data.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/id/minLength",
                    instanceLocation: "#/id",
                },
            ];
            return false;
        }
        if (!(typeof data.type === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/type",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(data.type === "payment.checkout")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/const",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(typeof data.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/type",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/pattern",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data === "object" && data.data && !Array.isArray(data.data))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/type",
                    instanceLocation: "#/data",
                },
            ];
            return false;
        }
        if (!("workspace" in data.data && hasOwn(data.data, "workspace"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("payment" in data.data && hasOwn(data.data, "payment"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("ledger" in data.data && hasOwn(data.data, "ledger"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("schema" in data.data && hasOwn(data.data, "schema"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("event" in data.data && hasOwn(data.data, "event"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace === "object" &&
            data.data.workspace &&
            !Array.isArray(data.data.workspace))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/type",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("id" in data.data.workspace && hasOwn(data.data.workspace, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/required",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/type",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (data.data.workspace.id.length < 1 ||
            stringLength(data.data.workspace.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/minLength",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment === "object" &&
            data.data.payment &&
            !Array.isArray(data.data.payment))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/type",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("id" in data.data.payment && hasOwn(data.data.payment, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.payment && hasOwn(data.data.payment, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/type",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (data.data.payment.id.length < 1 ||
            stringLength(data.data.payment.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/minLength",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/type",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (data.data.payment.ik.length < 1 ||
            stringLength(data.data.payment.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/minLength",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger === "object" &&
            data.data.ledger &&
            !Array.isArray(data.data.ledger))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/type",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("id" in data.data.ledger && hasOwn(data.data.ledger, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.ledger && hasOwn(data.data.ledger, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/type",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (data.data.ledger.id.length < 1 ||
            stringLength(data.data.ledger.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/minLength",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/type",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (data.data.ledger.ik.length < 1 ||
            stringLength(data.data.ledger.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/minLength",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema === "object" &&
            data.data.schema &&
            !Array.isArray(data.data.schema))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/type",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("key" in data.data.schema && hasOwn(data.data.schema, "key"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/required",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema.key === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/type",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (data.data.schema.key.length < 1 ||
            stringLength(data.data.schema.key) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/minLength",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event === "object" &&
            data.data.event &&
            !Array.isArray(data.data.event))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/type",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!("occurredAt" in data.data.event && hasOwn(data.data.event, "occurredAt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!("attempt" in data.data.event && hasOwn(data.data.event, "attempt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/attempt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/type",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.data.event.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/pattern",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.attempt === "object" &&
            data.data.event.attempt &&
            !Array.isArray(data.data.event.attempt))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/type",
                    instanceLocation: "#/data/event/attempt",
                },
            ];
            return false;
        }
        if (!("id" in data.data.event.attempt && hasOwn(data.data.event.attempt, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/required",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.attempt.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/properties/id/type",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        if (data.data.event.attempt.id.length < 1 ||
            stringLength(data.data.event.attempt.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/properties/id/minLength",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        return true;
    };
    return ref0;
})();
const validatePaymentRetryEvent = (function () {
    "use strict";
    const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    const stringLength = (string) => /[\uD800-\uDFFF]/.test(string) ? [...string].length : string.length;
    const pattern0 = new RegExp("^((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))T([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(\\.\\d+)?(Z|([+-]\\d{2}:?\\d{2}))$", "u");
    const ref0 = function validate(data) {
        validate.errors = null;
        if (!(typeof data === "object" && data && !Array.isArray(data))) {
            validate.errors = [{ keywordLocation: "#/type", instanceLocation: "#" }];
            return false;
        }
        if (!("id" in data && hasOwn(data, "id"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (!("type" in data && hasOwn(data, "type"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/type" },
            ];
            return false;
        }
        if (!("occurredAt" in data && hasOwn(data, "occurredAt"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/occurredAt" },
            ];
            return false;
        }
        if (!("data" in data && hasOwn(data, "data"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/data" },
            ];
            return false;
        }
        if (!(typeof data.id === "string")) {
            validate.errors = [
                { keywordLocation: "#/properties/id/type", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (data.id.length < 1 || stringLength(data.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/id/minLength",
                    instanceLocation: "#/id",
                },
            ];
            return false;
        }
        if (!(typeof data.type === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/type",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(data.type === "payment.retry")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/const",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(typeof data.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/type",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/pattern",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data === "object" && data.data && !Array.isArray(data.data))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/type",
                    instanceLocation: "#/data",
                },
            ];
            return false;
        }
        if (!("workspace" in data.data && hasOwn(data.data, "workspace"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("payment" in data.data && hasOwn(data.data, "payment"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("ledger" in data.data && hasOwn(data.data, "ledger"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("schema" in data.data && hasOwn(data.data, "schema"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("event" in data.data && hasOwn(data.data, "event"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace === "object" &&
            data.data.workspace &&
            !Array.isArray(data.data.workspace))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/type",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("id" in data.data.workspace && hasOwn(data.data.workspace, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/required",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/type",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (data.data.workspace.id.length < 1 ||
            stringLength(data.data.workspace.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/minLength",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment === "object" &&
            data.data.payment &&
            !Array.isArray(data.data.payment))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/type",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("id" in data.data.payment && hasOwn(data.data.payment, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.payment && hasOwn(data.data.payment, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/type",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (data.data.payment.id.length < 1 ||
            stringLength(data.data.payment.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/minLength",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/type",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (data.data.payment.ik.length < 1 ||
            stringLength(data.data.payment.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/minLength",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger === "object" &&
            data.data.ledger &&
            !Array.isArray(data.data.ledger))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/type",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("id" in data.data.ledger && hasOwn(data.data.ledger, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.ledger && hasOwn(data.data.ledger, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/type",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (data.data.ledger.id.length < 1 ||
            stringLength(data.data.ledger.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/minLength",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/type",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (data.data.ledger.ik.length < 1 ||
            stringLength(data.data.ledger.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/minLength",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema === "object" &&
            data.data.schema &&
            !Array.isArray(data.data.schema))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/type",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("key" in data.data.schema && hasOwn(data.data.schema, "key"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/required",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema.key === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/type",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (data.data.schema.key.length < 1 ||
            stringLength(data.data.schema.key) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/minLength",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event === "object" &&
            data.data.event &&
            !Array.isArray(data.data.event))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/type",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!("occurredAt" in data.data.event && hasOwn(data.data.event, "occurredAt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!("attempt" in data.data.event && hasOwn(data.data.event, "attempt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/attempt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/type",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.data.event.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/pattern",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.attempt === "object" &&
            data.data.event.attempt &&
            !Array.isArray(data.data.event.attempt))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/type",
                    instanceLocation: "#/data/event/attempt",
                },
            ];
            return false;
        }
        if (!("id" in data.data.event.attempt && hasOwn(data.data.event.attempt, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/required",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.attempt.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/properties/id/type",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        if (data.data.event.attempt.id.length < 1 ||
            stringLength(data.data.event.attempt.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/properties/id/minLength",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        return true;
    };
    return ref0;
})();
const validatePaymentCardCapturedEvent = (function () {
    "use strict";
    const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    const stringLength = (string) => /[\uD800-\uDFFF]/.test(string) ? [...string].length : string.length;
    const pattern0 = new RegExp("^((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))T([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(\\.\\d+)?(Z|([+-]\\d{2}:?\\d{2}))$", "u");
    const ref0 = function validate(data) {
        validate.errors = null;
        if (!(typeof data === "object" && data && !Array.isArray(data))) {
            validate.errors = [{ keywordLocation: "#/type", instanceLocation: "#" }];
            return false;
        }
        if (!("id" in data && hasOwn(data, "id"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (!("type" in data && hasOwn(data, "type"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/type" },
            ];
            return false;
        }
        if (!("occurredAt" in data && hasOwn(data, "occurredAt"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/occurredAt" },
            ];
            return false;
        }
        if (!("data" in data && hasOwn(data, "data"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/data" },
            ];
            return false;
        }
        if (!(typeof data.id === "string")) {
            validate.errors = [
                { keywordLocation: "#/properties/id/type", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (data.id.length < 1 || stringLength(data.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/id/minLength",
                    instanceLocation: "#/id",
                },
            ];
            return false;
        }
        if (!(typeof data.type === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/type",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(data.type === "payment.card_captured")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/const",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(typeof data.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/type",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/pattern",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data === "object" && data.data && !Array.isArray(data.data))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/type",
                    instanceLocation: "#/data",
                },
            ];
            return false;
        }
        if (!("workspace" in data.data && hasOwn(data.data, "workspace"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("payment" in data.data && hasOwn(data.data, "payment"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("ledger" in data.data && hasOwn(data.data, "ledger"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("schema" in data.data && hasOwn(data.data, "schema"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("event" in data.data && hasOwn(data.data, "event"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace === "object" &&
            data.data.workspace &&
            !Array.isArray(data.data.workspace))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/type",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("id" in data.data.workspace && hasOwn(data.data.workspace, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/required",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/type",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (data.data.workspace.id.length < 1 ||
            stringLength(data.data.workspace.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/minLength",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment === "object" &&
            data.data.payment &&
            !Array.isArray(data.data.payment))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/type",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("id" in data.data.payment && hasOwn(data.data.payment, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.payment && hasOwn(data.data.payment, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/type",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (data.data.payment.id.length < 1 ||
            stringLength(data.data.payment.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/minLength",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/type",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (data.data.payment.ik.length < 1 ||
            stringLength(data.data.payment.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/minLength",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger === "object" &&
            data.data.ledger &&
            !Array.isArray(data.data.ledger))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/type",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("id" in data.data.ledger && hasOwn(data.data.ledger, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.ledger && hasOwn(data.data.ledger, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/type",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (data.data.ledger.id.length < 1 ||
            stringLength(data.data.ledger.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/minLength",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/type",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (data.data.ledger.ik.length < 1 ||
            stringLength(data.data.ledger.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/minLength",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema === "object" &&
            data.data.schema &&
            !Array.isArray(data.data.schema))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/type",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("key" in data.data.schema && hasOwn(data.data.schema, "key"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/required",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema.key === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/type",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (data.data.schema.key.length < 1 ||
            stringLength(data.data.schema.key) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/minLength",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event === "object" &&
            data.data.event &&
            !Array.isArray(data.data.event))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/type",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!("occurredAt" in data.data.event && hasOwn(data.data.event, "occurredAt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!("attempt" in data.data.event && hasOwn(data.data.event, "attempt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/attempt",
                },
            ];
            return false;
        }
        if (!("ledgerEntry" in data.data.event &&
            hasOwn(data.data.event, "ledgerEntry"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/ledgerEntry",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/type",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.data.event.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/pattern",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.attempt === "object" &&
            data.data.event.attempt &&
            !Array.isArray(data.data.event.attempt))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/type",
                    instanceLocation: "#/data/event/attempt",
                },
            ];
            return false;
        }
        if (!("id" in data.data.event.attempt && hasOwn(data.data.event.attempt, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/required",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.attempt.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/properties/id/type",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        if (data.data.event.attempt.id.length < 1 ||
            stringLength(data.data.event.attempt.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/properties/id/minLength",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        const sub0 = (() => {
            if (!(typeof data.data.event.ledgerEntry === "object" &&
                data.data.event.ledgerEntry &&
                !Array.isArray(data.data.event.ledgerEntry)))
                return false;
            if (!("id" in data.data.event.ledgerEntry &&
                hasOwn(data.data.event.ledgerEntry, "id")))
                return false;
            if (!(typeof data.data.event.ledgerEntry.id === "string"))
                return false;
            if (data.data.event.ledgerEntry.id.length < 1 ||
                stringLength(data.data.event.ledgerEntry.id) < 1)
                return false;
            return true;
        })();
        const sub1 = (() => {
            if (!(data.data.event.ledgerEntry === null))
                return false;
            return true;
        })();
        if (!(sub0 || sub1)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/ledgerEntry/anyOf",
                    instanceLocation: "#/data/event/ledgerEntry",
                },
            ];
            return false;
        }
        return true;
    };
    return ref0;
})();
const validatePaymentCardDeclinedEvent = (function () {
    "use strict";
    const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    const stringLength = (string) => /[\uD800-\uDFFF]/.test(string) ? [...string].length : string.length;
    const pattern0 = new RegExp("^((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))T([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(\\.\\d+)?(Z|([+-]\\d{2}:?\\d{2}))$", "u");
    const ref0 = function validate(data) {
        validate.errors = null;
        if (!(typeof data === "object" && data && !Array.isArray(data))) {
            validate.errors = [{ keywordLocation: "#/type", instanceLocation: "#" }];
            return false;
        }
        if (!("id" in data && hasOwn(data, "id"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (!("type" in data && hasOwn(data, "type"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/type" },
            ];
            return false;
        }
        if (!("occurredAt" in data && hasOwn(data, "occurredAt"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/occurredAt" },
            ];
            return false;
        }
        if (!("data" in data && hasOwn(data, "data"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/data" },
            ];
            return false;
        }
        if (!(typeof data.id === "string")) {
            validate.errors = [
                { keywordLocation: "#/properties/id/type", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (data.id.length < 1 || stringLength(data.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/id/minLength",
                    instanceLocation: "#/id",
                },
            ];
            return false;
        }
        if (!(typeof data.type === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/type",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(data.type === "payment.card_declined")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/const",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(typeof data.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/type",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/pattern",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data === "object" && data.data && !Array.isArray(data.data))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/type",
                    instanceLocation: "#/data",
                },
            ];
            return false;
        }
        if (!("workspace" in data.data && hasOwn(data.data, "workspace"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("payment" in data.data && hasOwn(data.data, "payment"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("ledger" in data.data && hasOwn(data.data, "ledger"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("schema" in data.data && hasOwn(data.data, "schema"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("event" in data.data && hasOwn(data.data, "event"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace === "object" &&
            data.data.workspace &&
            !Array.isArray(data.data.workspace))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/type",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("id" in data.data.workspace && hasOwn(data.data.workspace, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/required",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/type",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (data.data.workspace.id.length < 1 ||
            stringLength(data.data.workspace.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/minLength",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment === "object" &&
            data.data.payment &&
            !Array.isArray(data.data.payment))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/type",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("id" in data.data.payment && hasOwn(data.data.payment, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.payment && hasOwn(data.data.payment, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/type",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (data.data.payment.id.length < 1 ||
            stringLength(data.data.payment.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/minLength",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/type",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (data.data.payment.ik.length < 1 ||
            stringLength(data.data.payment.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/minLength",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger === "object" &&
            data.data.ledger &&
            !Array.isArray(data.data.ledger))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/type",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("id" in data.data.ledger && hasOwn(data.data.ledger, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.ledger && hasOwn(data.data.ledger, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/type",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (data.data.ledger.id.length < 1 ||
            stringLength(data.data.ledger.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/minLength",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/type",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (data.data.ledger.ik.length < 1 ||
            stringLength(data.data.ledger.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/minLength",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema === "object" &&
            data.data.schema &&
            !Array.isArray(data.data.schema))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/type",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("key" in data.data.schema && hasOwn(data.data.schema, "key"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/required",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema.key === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/type",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (data.data.schema.key.length < 1 ||
            stringLength(data.data.schema.key) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/minLength",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event === "object" &&
            data.data.event &&
            !Array.isArray(data.data.event))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/type",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!("occurredAt" in data.data.event && hasOwn(data.data.event, "occurredAt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!("attempt" in data.data.event && hasOwn(data.data.event, "attempt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/attempt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/type",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.data.event.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/pattern",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.attempt === "object" &&
            data.data.event.attempt &&
            !Array.isArray(data.data.event.attempt))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/type",
                    instanceLocation: "#/data/event/attempt",
                },
            ];
            return false;
        }
        if (!("id" in data.data.event.attempt && hasOwn(data.data.event.attempt, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/required",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.attempt.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/properties/id/type",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        if (data.data.event.attempt.id.length < 1 ||
            stringLength(data.data.event.attempt.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/properties/id/minLength",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        return true;
    };
    return ref0;
})();
const validatePaymentCard3DSCanceledEvent = (function () {
    "use strict";
    const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    const stringLength = (string) => /[\uD800-\uDFFF]/.test(string) ? [...string].length : string.length;
    const pattern0 = new RegExp("^((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))T([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(\\.\\d+)?(Z|([+-]\\d{2}:?\\d{2}))$", "u");
    const ref0 = function validate(data) {
        validate.errors = null;
        if (!(typeof data === "object" && data && !Array.isArray(data))) {
            validate.errors = [{ keywordLocation: "#/type", instanceLocation: "#" }];
            return false;
        }
        if (!("id" in data && hasOwn(data, "id"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (!("type" in data && hasOwn(data, "type"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/type" },
            ];
            return false;
        }
        if (!("occurredAt" in data && hasOwn(data, "occurredAt"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/occurredAt" },
            ];
            return false;
        }
        if (!("data" in data && hasOwn(data, "data"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/data" },
            ];
            return false;
        }
        if (!(typeof data.id === "string")) {
            validate.errors = [
                { keywordLocation: "#/properties/id/type", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (data.id.length < 1 || stringLength(data.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/id/minLength",
                    instanceLocation: "#/id",
                },
            ];
            return false;
        }
        if (!(typeof data.type === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/type",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(data.type === "payment.card_3ds_canceled")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/const",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(typeof data.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/type",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/pattern",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data === "object" && data.data && !Array.isArray(data.data))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/type",
                    instanceLocation: "#/data",
                },
            ];
            return false;
        }
        if (!("workspace" in data.data && hasOwn(data.data, "workspace"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("payment" in data.data && hasOwn(data.data, "payment"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("ledger" in data.data && hasOwn(data.data, "ledger"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("schema" in data.data && hasOwn(data.data, "schema"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("event" in data.data && hasOwn(data.data, "event"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace === "object" &&
            data.data.workspace &&
            !Array.isArray(data.data.workspace))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/type",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("id" in data.data.workspace && hasOwn(data.data.workspace, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/required",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/type",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (data.data.workspace.id.length < 1 ||
            stringLength(data.data.workspace.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/minLength",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment === "object" &&
            data.data.payment &&
            !Array.isArray(data.data.payment))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/type",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("id" in data.data.payment && hasOwn(data.data.payment, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.payment && hasOwn(data.data.payment, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/type",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (data.data.payment.id.length < 1 ||
            stringLength(data.data.payment.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/minLength",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/type",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (data.data.payment.ik.length < 1 ||
            stringLength(data.data.payment.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/minLength",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger === "object" &&
            data.data.ledger &&
            !Array.isArray(data.data.ledger))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/type",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("id" in data.data.ledger && hasOwn(data.data.ledger, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.ledger && hasOwn(data.data.ledger, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/type",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (data.data.ledger.id.length < 1 ||
            stringLength(data.data.ledger.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/minLength",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/type",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (data.data.ledger.ik.length < 1 ||
            stringLength(data.data.ledger.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/minLength",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema === "object" &&
            data.data.schema &&
            !Array.isArray(data.data.schema))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/type",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("key" in data.data.schema && hasOwn(data.data.schema, "key"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/required",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema.key === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/type",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (data.data.schema.key.length < 1 ||
            stringLength(data.data.schema.key) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/minLength",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event === "object" &&
            data.data.event &&
            !Array.isArray(data.data.event))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/type",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!("occurredAt" in data.data.event && hasOwn(data.data.event, "occurredAt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!("attempt" in data.data.event && hasOwn(data.data.event, "attempt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/attempt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/type",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.data.event.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/pattern",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.attempt === "object" &&
            data.data.event.attempt &&
            !Array.isArray(data.data.event.attempt))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/type",
                    instanceLocation: "#/data/event/attempt",
                },
            ];
            return false;
        }
        if (!("id" in data.data.event.attempt && hasOwn(data.data.event.attempt, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/required",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.attempt.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/properties/id/type",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        if (data.data.event.attempt.id.length < 1 ||
            stringLength(data.data.event.attempt.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/attempt/properties/id/minLength",
                    instanceLocation: "#/data/event/attempt/id",
                },
            ];
            return false;
        }
        return true;
    };
    return ref0;
})();
const validatePaymentSettledEvent = (function () {
    "use strict";
    const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    const stringLength = (string) => /[\uD800-\uDFFF]/.test(string) ? [...string].length : string.length;
    const pattern0 = new RegExp("^((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))T([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(\\.\\d+)?(Z|([+-]\\d{2}:?\\d{2}))$", "u");
    const ref0 = function validate(data) {
        validate.errors = null;
        if (!(typeof data === "object" && data && !Array.isArray(data))) {
            validate.errors = [{ keywordLocation: "#/type", instanceLocation: "#" }];
            return false;
        }
        if (!("id" in data && hasOwn(data, "id"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (!("type" in data && hasOwn(data, "type"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/type" },
            ];
            return false;
        }
        if (!("occurredAt" in data && hasOwn(data, "occurredAt"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/occurredAt" },
            ];
            return false;
        }
        if (!("data" in data && hasOwn(data, "data"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/data" },
            ];
            return false;
        }
        if (!(typeof data.id === "string")) {
            validate.errors = [
                { keywordLocation: "#/properties/id/type", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (data.id.length < 1 || stringLength(data.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/id/minLength",
                    instanceLocation: "#/id",
                },
            ];
            return false;
        }
        if (!(typeof data.type === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/type",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(data.type === "payment.settled")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/const",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(typeof data.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/type",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/pattern",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data === "object" && data.data && !Array.isArray(data.data))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/type",
                    instanceLocation: "#/data",
                },
            ];
            return false;
        }
        if (!("workspace" in data.data && hasOwn(data.data, "workspace"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("payment" in data.data && hasOwn(data.data, "payment"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("ledger" in data.data && hasOwn(data.data, "ledger"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("schema" in data.data && hasOwn(data.data, "schema"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("event" in data.data && hasOwn(data.data, "event"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace === "object" &&
            data.data.workspace &&
            !Array.isArray(data.data.workspace))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/type",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("id" in data.data.workspace && hasOwn(data.data.workspace, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/required",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/type",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (data.data.workspace.id.length < 1 ||
            stringLength(data.data.workspace.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/minLength",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment === "object" &&
            data.data.payment &&
            !Array.isArray(data.data.payment))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/type",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("id" in data.data.payment && hasOwn(data.data.payment, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.payment && hasOwn(data.data.payment, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/type",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (data.data.payment.id.length < 1 ||
            stringLength(data.data.payment.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/minLength",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/type",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (data.data.payment.ik.length < 1 ||
            stringLength(data.data.payment.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/minLength",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger === "object" &&
            data.data.ledger &&
            !Array.isArray(data.data.ledger))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/type",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("id" in data.data.ledger && hasOwn(data.data.ledger, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.ledger && hasOwn(data.data.ledger, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/type",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (data.data.ledger.id.length < 1 ||
            stringLength(data.data.ledger.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/minLength",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/type",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (data.data.ledger.ik.length < 1 ||
            stringLength(data.data.ledger.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/minLength",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema === "object" &&
            data.data.schema &&
            !Array.isArray(data.data.schema))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/type",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("key" in data.data.schema && hasOwn(data.data.schema, "key"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/required",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema.key === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/type",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (data.data.schema.key.length < 1 ||
            stringLength(data.data.schema.key) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/minLength",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event === "object" &&
            data.data.event &&
            !Array.isArray(data.data.event))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/type",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!("occurredAt" in data.data.event && hasOwn(data.data.event, "occurredAt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!("ledgerEntry" in data.data.event &&
            hasOwn(data.data.event, "ledgerEntry"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/ledgerEntry",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/type",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.data.event.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/pattern",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.ledgerEntry === "object" &&
            data.data.event.ledgerEntry &&
            !Array.isArray(data.data.event.ledgerEntry))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/ledgerEntry/type",
                    instanceLocation: "#/data/event/ledgerEntry",
                },
            ];
            return false;
        }
        if (!("id" in data.data.event.ledgerEntry &&
            hasOwn(data.data.event.ledgerEntry, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/ledgerEntry/required",
                    instanceLocation: "#/data/event/ledgerEntry/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.ledgerEntry.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/ledgerEntry/properties/id/type",
                    instanceLocation: "#/data/event/ledgerEntry/id",
                },
            ];
            return false;
        }
        if (data.data.event.ledgerEntry.id.length < 1 ||
            stringLength(data.data.event.ledgerEntry.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/ledgerEntry/properties/id/minLength",
                    instanceLocation: "#/data/event/ledgerEntry/id",
                },
            ];
            return false;
        }
        return true;
    };
    return ref0;
})();
const validatePaymentRefundInitiatedEvent = (function () {
    "use strict";
    const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    const stringLength = (string) => /[\uD800-\uDFFF]/.test(string) ? [...string].length : string.length;
    const pattern0 = new RegExp("^((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))T([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(\\.\\d+)?(Z|([+-]\\d{2}:?\\d{2}))$", "u");
    const ref0 = function validate(data) {
        validate.errors = null;
        if (!(typeof data === "object" && data && !Array.isArray(data))) {
            validate.errors = [{ keywordLocation: "#/type", instanceLocation: "#" }];
            return false;
        }
        if (!("id" in data && hasOwn(data, "id"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (!("type" in data && hasOwn(data, "type"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/type" },
            ];
            return false;
        }
        if (!("occurredAt" in data && hasOwn(data, "occurredAt"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/occurredAt" },
            ];
            return false;
        }
        if (!("data" in data && hasOwn(data, "data"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/data" },
            ];
            return false;
        }
        if (!(typeof data.id === "string")) {
            validate.errors = [
                { keywordLocation: "#/properties/id/type", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (data.id.length < 1 || stringLength(data.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/id/minLength",
                    instanceLocation: "#/id",
                },
            ];
            return false;
        }
        if (!(typeof data.type === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/type",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(data.type === "payment.refund_initiated")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/const",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(typeof data.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/type",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/pattern",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data === "object" && data.data && !Array.isArray(data.data))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/type",
                    instanceLocation: "#/data",
                },
            ];
            return false;
        }
        if (!("workspace" in data.data && hasOwn(data.data, "workspace"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("payment" in data.data && hasOwn(data.data, "payment"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("ledger" in data.data && hasOwn(data.data, "ledger"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("schema" in data.data && hasOwn(data.data, "schema"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("event" in data.data && hasOwn(data.data, "event"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace === "object" &&
            data.data.workspace &&
            !Array.isArray(data.data.workspace))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/type",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("id" in data.data.workspace && hasOwn(data.data.workspace, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/required",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/type",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (data.data.workspace.id.length < 1 ||
            stringLength(data.data.workspace.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/minLength",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment === "object" &&
            data.data.payment &&
            !Array.isArray(data.data.payment))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/type",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("id" in data.data.payment && hasOwn(data.data.payment, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.payment && hasOwn(data.data.payment, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/type",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (data.data.payment.id.length < 1 ||
            stringLength(data.data.payment.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/minLength",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/type",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (data.data.payment.ik.length < 1 ||
            stringLength(data.data.payment.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/minLength",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger === "object" &&
            data.data.ledger &&
            !Array.isArray(data.data.ledger))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/type",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("id" in data.data.ledger && hasOwn(data.data.ledger, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.ledger && hasOwn(data.data.ledger, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/type",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (data.data.ledger.id.length < 1 ||
            stringLength(data.data.ledger.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/minLength",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/type",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (data.data.ledger.ik.length < 1 ||
            stringLength(data.data.ledger.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/minLength",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema === "object" &&
            data.data.schema &&
            !Array.isArray(data.data.schema))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/type",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("key" in data.data.schema && hasOwn(data.data.schema, "key"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/required",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema.key === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/type",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (data.data.schema.key.length < 1 ||
            stringLength(data.data.schema.key) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/minLength",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event === "object" &&
            data.data.event &&
            !Array.isArray(data.data.event))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/type",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!("occurredAt" in data.data.event && hasOwn(data.data.event, "occurredAt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!("refund" in data.data.event && hasOwn(data.data.event, "refund"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/refund",
                },
            ];
            return false;
        }
        if (!("ledgerEntry" in data.data.event &&
            hasOwn(data.data.event, "ledgerEntry"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/ledgerEntry",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/type",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.data.event.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/pattern",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.refund === "object" &&
            data.data.event.refund &&
            !Array.isArray(data.data.event.refund))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/type",
                    instanceLocation: "#/data/event/refund",
                },
            ];
            return false;
        }
        if (!("id" in data.data.event.refund && hasOwn(data.data.event.refund, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/required",
                    instanceLocation: "#/data/event/refund/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.event.refund && hasOwn(data.data.event.refund, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/required",
                    instanceLocation: "#/data/event/refund/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.refund.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/properties/id/type",
                    instanceLocation: "#/data/event/refund/id",
                },
            ];
            return false;
        }
        if (data.data.event.refund.id.length < 1 ||
            stringLength(data.data.event.refund.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/properties/id/minLength",
                    instanceLocation: "#/data/event/refund/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.refund.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/properties/ik/type",
                    instanceLocation: "#/data/event/refund/ik",
                },
            ];
            return false;
        }
        if (data.data.event.refund.ik.length < 1 ||
            stringLength(data.data.event.refund.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/properties/ik/minLength",
                    instanceLocation: "#/data/event/refund/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.ledgerEntry === "object" &&
            data.data.event.ledgerEntry &&
            !Array.isArray(data.data.event.ledgerEntry))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/ledgerEntry/type",
                    instanceLocation: "#/data/event/ledgerEntry",
                },
            ];
            return false;
        }
        if (!("id" in data.data.event.ledgerEntry &&
            hasOwn(data.data.event.ledgerEntry, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/ledgerEntry/required",
                    instanceLocation: "#/data/event/ledgerEntry/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.ledgerEntry.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/ledgerEntry/properties/id/type",
                    instanceLocation: "#/data/event/ledgerEntry/id",
                },
            ];
            return false;
        }
        if (data.data.event.ledgerEntry.id.length < 1 ||
            stringLength(data.data.event.ledgerEntry.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/ledgerEntry/properties/id/minLength",
                    instanceLocation: "#/data/event/ledgerEntry/id",
                },
            ];
            return false;
        }
        return true;
    };
    return ref0;
})();
const validatePaymentRefundSettledEvent = (function () {
    "use strict";
    const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    const stringLength = (string) => /[\uD800-\uDFFF]/.test(string) ? [...string].length : string.length;
    const pattern0 = new RegExp("^((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))T([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(\\.\\d+)?(Z|([+-]\\d{2}:?\\d{2}))$", "u");
    const ref0 = function validate(data) {
        validate.errors = null;
        if (!(typeof data === "object" && data && !Array.isArray(data))) {
            validate.errors = [{ keywordLocation: "#/type", instanceLocation: "#" }];
            return false;
        }
        if (!("id" in data && hasOwn(data, "id"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (!("type" in data && hasOwn(data, "type"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/type" },
            ];
            return false;
        }
        if (!("occurredAt" in data && hasOwn(data, "occurredAt"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/occurredAt" },
            ];
            return false;
        }
        if (!("data" in data && hasOwn(data, "data"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/data" },
            ];
            return false;
        }
        if (!(typeof data.id === "string")) {
            validate.errors = [
                { keywordLocation: "#/properties/id/type", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (data.id.length < 1 || stringLength(data.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/id/minLength",
                    instanceLocation: "#/id",
                },
            ];
            return false;
        }
        if (!(typeof data.type === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/type",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(data.type === "payment.refund_settled")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/const",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(typeof data.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/type",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/pattern",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data === "object" && data.data && !Array.isArray(data.data))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/type",
                    instanceLocation: "#/data",
                },
            ];
            return false;
        }
        if (!("workspace" in data.data && hasOwn(data.data, "workspace"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("payment" in data.data && hasOwn(data.data, "payment"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("ledger" in data.data && hasOwn(data.data, "ledger"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("schema" in data.data && hasOwn(data.data, "schema"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("event" in data.data && hasOwn(data.data, "event"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace === "object" &&
            data.data.workspace &&
            !Array.isArray(data.data.workspace))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/type",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("id" in data.data.workspace && hasOwn(data.data.workspace, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/required",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/type",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (data.data.workspace.id.length < 1 ||
            stringLength(data.data.workspace.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/minLength",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment === "object" &&
            data.data.payment &&
            !Array.isArray(data.data.payment))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/type",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("id" in data.data.payment && hasOwn(data.data.payment, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.payment && hasOwn(data.data.payment, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/type",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (data.data.payment.id.length < 1 ||
            stringLength(data.data.payment.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/minLength",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/type",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (data.data.payment.ik.length < 1 ||
            stringLength(data.data.payment.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/minLength",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger === "object" &&
            data.data.ledger &&
            !Array.isArray(data.data.ledger))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/type",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("id" in data.data.ledger && hasOwn(data.data.ledger, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.ledger && hasOwn(data.data.ledger, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/type",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (data.data.ledger.id.length < 1 ||
            stringLength(data.data.ledger.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/minLength",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/type",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (data.data.ledger.ik.length < 1 ||
            stringLength(data.data.ledger.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/minLength",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema === "object" &&
            data.data.schema &&
            !Array.isArray(data.data.schema))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/type",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("key" in data.data.schema && hasOwn(data.data.schema, "key"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/required",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema.key === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/type",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (data.data.schema.key.length < 1 ||
            stringLength(data.data.schema.key) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/minLength",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event === "object" &&
            data.data.event &&
            !Array.isArray(data.data.event))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/type",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!("occurredAt" in data.data.event && hasOwn(data.data.event, "occurredAt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!("refund" in data.data.event && hasOwn(data.data.event, "refund"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/refund",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/type",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.data.event.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/pattern",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.refund === "object" &&
            data.data.event.refund &&
            !Array.isArray(data.data.event.refund))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/type",
                    instanceLocation: "#/data/event/refund",
                },
            ];
            return false;
        }
        if (!("id" in data.data.event.refund && hasOwn(data.data.event.refund, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/required",
                    instanceLocation: "#/data/event/refund/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.event.refund && hasOwn(data.data.event.refund, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/required",
                    instanceLocation: "#/data/event/refund/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.refund.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/properties/id/type",
                    instanceLocation: "#/data/event/refund/id",
                },
            ];
            return false;
        }
        if (data.data.event.refund.id.length < 1 ||
            stringLength(data.data.event.refund.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/properties/id/minLength",
                    instanceLocation: "#/data/event/refund/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.refund.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/properties/ik/type",
                    instanceLocation: "#/data/event/refund/ik",
                },
            ];
            return false;
        }
        if (data.data.event.refund.ik.length < 1 ||
            stringLength(data.data.event.refund.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/properties/ik/minLength",
                    instanceLocation: "#/data/event/refund/ik",
                },
            ];
            return false;
        }
        return true;
    };
    return ref0;
})();
const validatePaymentRefundFailedEvent = (function () {
    "use strict";
    const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    const stringLength = (string) => /[\uD800-\uDFFF]/.test(string) ? [...string].length : string.length;
    const pattern0 = new RegExp("^((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))T([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(\\.\\d+)?(Z|([+-]\\d{2}:?\\d{2}))$", "u");
    const ref0 = function validate(data) {
        validate.errors = null;
        if (!(typeof data === "object" && data && !Array.isArray(data))) {
            validate.errors = [{ keywordLocation: "#/type", instanceLocation: "#" }];
            return false;
        }
        if (!("id" in data && hasOwn(data, "id"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (!("type" in data && hasOwn(data, "type"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/type" },
            ];
            return false;
        }
        if (!("occurredAt" in data && hasOwn(data, "occurredAt"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/occurredAt" },
            ];
            return false;
        }
        if (!("data" in data && hasOwn(data, "data"))) {
            validate.errors = [
                { keywordLocation: "#/required", instanceLocation: "#/data" },
            ];
            return false;
        }
        if (!(typeof data.id === "string")) {
            validate.errors = [
                { keywordLocation: "#/properties/id/type", instanceLocation: "#/id" },
            ];
            return false;
        }
        if (data.id.length < 1 || stringLength(data.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/id/minLength",
                    instanceLocation: "#/id",
                },
            ];
            return false;
        }
        if (!(typeof data.type === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/type",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(data.type === "payment.refund_failed")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/type/const",
                    instanceLocation: "#/type",
                },
            ];
            return false;
        }
        if (!(typeof data.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/type",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/occurredAt/pattern",
                    instanceLocation: "#/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data === "object" && data.data && !Array.isArray(data.data))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/type",
                    instanceLocation: "#/data",
                },
            ];
            return false;
        }
        if (!("workspace" in data.data && hasOwn(data.data, "workspace"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("payment" in data.data && hasOwn(data.data, "payment"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("ledger" in data.data && hasOwn(data.data, "ledger"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("schema" in data.data && hasOwn(data.data, "schema"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("event" in data.data && hasOwn(data.data, "event"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/required",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace === "object" &&
            data.data.workspace &&
            !Array.isArray(data.data.workspace))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/type",
                    instanceLocation: "#/data/workspace",
                },
            ];
            return false;
        }
        if (!("id" in data.data.workspace && hasOwn(data.data.workspace, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/required",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.workspace.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/type",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (data.data.workspace.id.length < 1 ||
            stringLength(data.data.workspace.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/workspace/properties/id/minLength",
                    instanceLocation: "#/data/workspace/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment === "object" &&
            data.data.payment &&
            !Array.isArray(data.data.payment))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/type",
                    instanceLocation: "#/data/payment",
                },
            ];
            return false;
        }
        if (!("id" in data.data.payment && hasOwn(data.data.payment, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.payment && hasOwn(data.data.payment, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/required",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/type",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (data.data.payment.id.length < 1 ||
            stringLength(data.data.payment.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/id/minLength",
                    instanceLocation: "#/data/payment/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.payment.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/type",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (data.data.payment.ik.length < 1 ||
            stringLength(data.data.payment.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/payment/properties/ik/minLength",
                    instanceLocation: "#/data/payment/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger === "object" &&
            data.data.ledger &&
            !Array.isArray(data.data.ledger))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/type",
                    instanceLocation: "#/data/ledger",
                },
            ];
            return false;
        }
        if (!("id" in data.data.ledger && hasOwn(data.data.ledger, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.ledger && hasOwn(data.data.ledger, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/required",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/type",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (data.data.ledger.id.length < 1 ||
            stringLength(data.data.ledger.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/id/minLength",
                    instanceLocation: "#/data/ledger/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.ledger.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/type",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (data.data.ledger.ik.length < 1 ||
            stringLength(data.data.ledger.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/ledger/properties/ik/minLength",
                    instanceLocation: "#/data/ledger/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema === "object" &&
            data.data.schema &&
            !Array.isArray(data.data.schema))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/type",
                    instanceLocation: "#/data/schema",
                },
            ];
            return false;
        }
        if (!("key" in data.data.schema && hasOwn(data.data.schema, "key"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/required",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.schema.key === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/type",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (data.data.schema.key.length < 1 ||
            stringLength(data.data.schema.key) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/schema/properties/key/minLength",
                    instanceLocation: "#/data/schema/key",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event === "object" &&
            data.data.event &&
            !Array.isArray(data.data.event))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/type",
                    instanceLocation: "#/data/event",
                },
            ];
            return false;
        }
        if (!("occurredAt" in data.data.event && hasOwn(data.data.event, "occurredAt"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!("refund" in data.data.event && hasOwn(data.data.event, "refund"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/refund",
                },
            ];
            return false;
        }
        if (!("ledgerEntry" in data.data.event &&
            hasOwn(data.data.event, "ledgerEntry"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/required",
                    instanceLocation: "#/data/event/ledgerEntry",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.occurredAt === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/type",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!pattern0.test(data.data.event.occurredAt)) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/occurredAt/pattern",
                    instanceLocation: "#/data/event/occurredAt",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.refund === "object" &&
            data.data.event.refund &&
            !Array.isArray(data.data.event.refund))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/type",
                    instanceLocation: "#/data/event/refund",
                },
            ];
            return false;
        }
        if (!("id" in data.data.event.refund && hasOwn(data.data.event.refund, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/required",
                    instanceLocation: "#/data/event/refund/id",
                },
            ];
            return false;
        }
        if (!("ik" in data.data.event.refund && hasOwn(data.data.event.refund, "ik"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/required",
                    instanceLocation: "#/data/event/refund/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.refund.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/properties/id/type",
                    instanceLocation: "#/data/event/refund/id",
                },
            ];
            return false;
        }
        if (data.data.event.refund.id.length < 1 ||
            stringLength(data.data.event.refund.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/properties/id/minLength",
                    instanceLocation: "#/data/event/refund/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.refund.ik === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/properties/ik/type",
                    instanceLocation: "#/data/event/refund/ik",
                },
            ];
            return false;
        }
        if (data.data.event.refund.ik.length < 1 ||
            stringLength(data.data.event.refund.ik) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/refund/properties/ik/minLength",
                    instanceLocation: "#/data/event/refund/ik",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.ledgerEntry === "object" &&
            data.data.event.ledgerEntry &&
            !Array.isArray(data.data.event.ledgerEntry))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/ledgerEntry/type",
                    instanceLocation: "#/data/event/ledgerEntry",
                },
            ];
            return false;
        }
        if (!("id" in data.data.event.ledgerEntry &&
            hasOwn(data.data.event.ledgerEntry, "id"))) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/ledgerEntry/required",
                    instanceLocation: "#/data/event/ledgerEntry/id",
                },
            ];
            return false;
        }
        if (!(typeof data.data.event.ledgerEntry.id === "string")) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/ledgerEntry/properties/id/type",
                    instanceLocation: "#/data/event/ledgerEntry/id",
                },
            ];
            return false;
        }
        if (data.data.event.ledgerEntry.id.length < 1 ||
            stringLength(data.data.event.ledgerEntry.id) < 1) {
            validate.errors = [
                {
                    keywordLocation: "#/properties/data/properties/event/properties/ledgerEntry/properties/id/minLength",
                    instanceLocation: "#/data/event/ledgerEntry/id",
                },
            ];
            return false;
        }
        return true;
    };
    return ref0;
})();
exports.eventValidators = new Map([
    ["payment.created", validatePaymentCreatedEvent],
    ["payment.checkout", validatePaymentCheckoutEvent],
    ["payment.retry", validatePaymentRetryEvent],
    ["payment.card_captured", validatePaymentCardCapturedEvent],
    ["payment.card_declined", validatePaymentCardDeclinedEvent],
    ["payment.card_3ds_canceled", validatePaymentCard3DSCanceledEvent],
    ["payment.settled", validatePaymentSettledEvent],
    ["payment.refund_initiated", validatePaymentRefundInitiatedEvent],
    ["payment.refund_settled", validatePaymentRefundSettledEvent],
    ["payment.refund_failed", validatePaymentRefundFailedEvent],
]);
