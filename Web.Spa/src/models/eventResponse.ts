// File contains our mutation of the Ticketmaster API types

export type EventResponse = {
    pagination: EventPage;
    results: EventResult[]; 
    navigation: EventLinks;
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