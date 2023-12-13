// File contains all of the response data types from Ticketmaster API

export type EventResponse = {
    page: EventPage;
    _embedded: {
        events: EventResult[];
    }
    _links: EventLinks;
}

export type EventPage = {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
}

export type EventResult = { // Would be nice if this was typed on the Ticketmaster support portal
    id: string;
    name: string;
    //... TODO: Find other things to include
}

export type EventLinks = {
    first: EventLink;
    last: EventLink;
    next: EventLink;
    self: EventLink;
}

export type EventLink = {
    href: string;
}