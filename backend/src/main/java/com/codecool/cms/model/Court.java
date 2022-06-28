package com.codecool.cms.model;

public enum Court {

    COURT1(1),
    COURT2(2),
    COURT3(3),
    COURT4(4);

    // Field(s)
    private final int courtNumber;

    // Constructor()
    Court(int courtNumber) {
        this.courtNumber = courtNumber;
    }

    // Getter(s), Setter(s)
    public int getCourtNumber() {
        return courtNumber;
    }
}
