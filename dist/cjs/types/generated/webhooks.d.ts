export type WebhookEvent = PaymentCreatedEvent | PaymentCheckoutEvent | PaymentRetryEvent | PaymentCardCapturedEvent | PaymentCardDeclinedEvent | PaymentCard3DSCanceledEvent | PaymentSettledEvent | PaymentRefundInitiatedEvent | PaymentRefundSettledEvent | PaymentRefundFailedEvent | PaymentDisputeChargebackCreatedEvent | PaymentDisputeInquiryCreatedEvent | PaymentDisputeInquiryEvidenceSubmittedEvent | PaymentDisputeInquiryClosedEvent | PaymentDisputeInquiryEscalatedEvent | PaymentDisputeChargebackEvidenceSubmittedEvent | PaymentDisputeChargebackLostEvent | PaymentDisputeChargebackWonEvent | PaymentDisputeChargebackRefundedEvent;
export interface PaymentCreatedEvent {
    id: string;
    type: "payment.created";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
        };
    };
}
export interface PaymentCheckoutEvent {
    id: string;
    type: "payment.checkout";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            attempt: {
                id: string;
            };
        };
    };
}
export interface PaymentRetryEvent {
    id: string;
    type: "payment.retry";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            attempt: {
                id: string;
            };
        };
    };
}
export interface PaymentCardCapturedEvent {
    id: string;
    type: "payment.card_captured";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            attempt: {
                id: string;
            };
            ledgerEntry: {
                id: string;
            } | null;
        };
    };
}
export interface PaymentCardDeclinedEvent {
    id: string;
    type: "payment.card_declined";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            attempt: {
                id: string;
            };
        };
    };
}
export interface PaymentCard3DSCanceledEvent {
    id: string;
    type: "payment.card_3ds_canceled";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            attempt: {
                id: string;
            };
        };
    };
}
export interface PaymentSettledEvent {
    id: string;
    type: "payment.settled";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            ledgerEntry: {
                id: string;
            };
        };
    };
}
export interface PaymentRefundInitiatedEvent {
    id: string;
    type: "payment.refund_initiated";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            refund: {
                id: string;
                ik: string;
            };
            ledgerEntry: {
                id: string;
            };
        };
    };
}
export interface PaymentRefundSettledEvent {
    id: string;
    type: "payment.refund_settled";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            refund: {
                id: string;
                ik: string;
            };
        };
    };
}
export interface PaymentRefundFailedEvent {
    id: string;
    type: "payment.refund_failed";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            refund: {
                id: string;
                ik: string;
            };
            ledgerEntry: {
                id: string;
            };
        };
    };
}
export interface PaymentDisputeChargebackCreatedEvent {
    id: string;
    type: "payment.dispute_chargeback_created";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            dispute: {
                id: string;
            };
            ledgerEntry: {
                id: string;
            };
        };
    };
}
export interface PaymentDisputeInquiryCreatedEvent {
    id: string;
    type: "payment.dispute_inquiry_created";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            dispute: {
                id: string;
            };
        };
    };
}
export interface PaymentDisputeInquiryEvidenceSubmittedEvent {
    id: string;
    type: "payment.dispute_inquiry_evidence_submitted";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            dispute: {
                id: string;
            };
        };
    };
}
export interface PaymentDisputeInquiryClosedEvent {
    id: string;
    type: "payment.dispute_inquiry_closed";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            dispute: {
                id: string;
            };
        };
    };
}
export interface PaymentDisputeInquiryEscalatedEvent {
    id: string;
    type: "payment.dispute_inquiry_escalated";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            dispute: {
                id: string;
            };
            ledgerEntry: {
                id: string;
            };
        };
    };
}
export interface PaymentDisputeChargebackEvidenceSubmittedEvent {
    id: string;
    type: "payment.dispute_chargeback_evidence_submitted";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            dispute: {
                id: string;
            };
            ledgerEntry: {
                id: string;
            };
        };
    };
}
export interface PaymentDisputeChargebackLostEvent {
    id: string;
    type: "payment.dispute_chargeback_lost";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            dispute: {
                id: string;
            };
        };
    };
}
export interface PaymentDisputeChargebackWonEvent {
    id: string;
    type: "payment.dispute_chargeback_won";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            dispute: {
                id: string;
            };
            ledgerEntry: {
                id: string;
            };
        };
    };
}
export interface PaymentDisputeChargebackRefundedEvent {
    id: string;
    type: "payment.dispute_chargeback_refunded";
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
        payment: {
            id: string;
            ik: string;
        };
        ledger: {
            id: string;
            ik: string;
        };
        schema: {
            key: string;
        };
        event: {
            occurredAt: string;
            dispute: {
                id: string;
            };
            ledgerEntry: {
                id: string;
            };
        };
    };
}
export interface UnknownWebhookEvent {
    id: string;
    type: string;
    occurredAt: string;
    data: {
        workspace: {
            id: string;
        };
    };
}
//# sourceMappingURL=webhooks.d.ts.map