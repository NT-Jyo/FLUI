export interface GoogleSignIn {
    additionalUserInfo: AdditionalUserInfo;
    user:               User;
}

export interface AdditionalUserInfo {
    profile:    Profile;
    username:   null;
    providerId: string;
    isNewUser:  boolean;
}

export interface Profile {
    at_hash:        string;
    exp:            number;
    hd:             string;
    locale:         string;
    given_name:     string;
    azp:            string;
    nonce:          string;
    picture:        string;
    name:           string;
    email_verified: boolean;
    aud:            string;
    iss:            string;
    sub:            string;
    family_name:    string;
    iat:            number;
    email:          string;
}

export interface User {
    isAnonymous:   boolean;
    emailVerified: boolean;
    providerData:  ProviderDatum[];
    uid:           string;
    email:         string;
    refreshToken:  string;
    displayName:   string;
    tenantId:      null;
    phoneNumber:   null;
    photoURL:      string;
    metadata:      Metadata;
    providerId:    string;
}

export interface Metadata {
    creationTime:   number;
    lastSignInTime: number;
}

export interface ProviderDatum {
    email:       string;
    providerId:  string;
    uid:         string;
    photoURL:    string;
    displayName: string;
}
