export const configValidationMessages = {
    normal: [
        { type: 'required', message: ' is required.' },
        {
            type: 'maxLength',
            message: ' must be at most {{maxLength}} characters long.',
        },
        {
            type: 'maxlength',
            message: ' must be at most {{maxLength}} characters long.',
        },
        {
            type: 'minLength',
            message: ' must be at least {{minLength}} characters long.',
        },
        {
            type: 'minlength',
            message: ' must be at least {{minLength}} characters long.',
        },
        {
            type: 'notUnique',
            message: ' already exists.',
        },
        {
            type: 'date',
            message: 'Date should be in the dd/mm/yyyy format',
        },
        {
            type: 'used',
            message: ' has already been used.',
        },
        { type: 'email', message: ' is invalid.' },
        { type: 'pattern', message: ' is invalid.' },
        { type: 'notFound', message: " doesn't exist" },
        { type: 'custom' },
    ],
    address: [
        { type: 'required', message: 'Address is required.' },
        {
            type: 'minlength',
            message: 'Address must be at least 3 characters long.',
        },
    ],
    addressLGA: [
        {
            type: 'required',
            message: 'Local government of address is required.',
        },
        {
            type: 'minlength',
            message: 'Local government of address must be at least 2 characters long.',
        },
    ],
    className: [
        { type: 'required', message: 'Class name is required.' },
        {
            type: 'minlength',
            message: 'Class name must be at least 2 characters long.',
        },
    ],
    classSection: [
        { type: 'required', message: 'Class section is required.' },
        {
            type: 'minlength',
            message: 'Class section must be at least 1 character long.',
        },
    ],
    email: [
        { type: 'required', message: 'Email is required.' },
        {
            type: 'minlength',
            message: 'Email must be at least 5 characters long.',
        },
        { type: 'pattern', message: 'Email must be valid.' },
        { type: 'email', message: 'Email must be valid' },
        {
            type: 'notUnique',
            message: 'Email already exists.',
        },
        {
            type: 'equalToOther',
            message: "Alternate email can't be the same as email",
        },
    ],
    entityNumber: [
        { type: 'required', message: ' is required.' },
        {
            type: 'invalid',
            message: ' is invalid.',
        },
        { type: 'notFound', message: ' was not found.' },
        {
            type: 'notUnique',
            message: ' already exists.',
        },
    ],
    firstname: [
        { type: 'required', message: 'First Name is required.' },
        {
            type: 'minlength',
            message: 'Name must be at least 2 characters long.',
        },
    ],
    lastname: [
        { type: 'required', message: 'Last Name is required.' },
        {
            type: 'minlength',
            message: 'Name must be at least 2 characters long.',
        },
    ],
    lga: [
        {
            type: 'required',
            message: 'Local government of origin is required.',
        },
        {
            type: 'minlength',
            message: 'Local government of origin must be at least 2 characters long.',
        },
    ],
    maidenName: [
        { type: 'required', message: 'Maiden Name is required.' },
        {
            type: 'minlength',
            message: 'Maiden Name must be at least 2 characters long.',
        },
    ],
    mobile: [
        { type: 'required', message: 'Phone number is required.' },
        {
            type: 'minlength',
            message: 'Phone number must be at least 11 characters long.',
        },
        {
            type: 'notUnique',
            message: 'Phone number already exists.',
        },
        {
            type: 'equalToOther',
            message: "Alternate phone number can't be the same as phone number",
        },
        {
            type: 'invalid',
            message: 'Phone number is invalid',
        },
        {
            type: 'countryCode',
            message: 'Country code is invalid',
        },
    ],
    name: [
        { type: 'required', message: ' is required.' },
        {
            type: 'pattern',
            message: " can only contain letters, numbers and '-'.",
        },
        {
            type: 'minlength',
            message: ' must be at least 2 characters long.',
        },
    ],
    numbers: [
        {
            type: 'pattern',
            message: 'This field must be a number.',
        },
        { type: 'required', message: 'A value is required.' },
    ],
    occupation: [
        { type: 'required', message: 'Occupation is required.' },
        {
            type: 'minlength',
            message: 'Occupation must be at least 2 characters long.',
        },
    ],
    othername: [
        { type: 'required', message: 'Other Name is required.' },
        {
            type: 'minlength',
            message: 'Name must be at least 2 characters long.',
        },
    ],
    password: [
        { type: 'required', message: 'Password is required.' },
        {
            type: 'minlength',
            message: 'Password must be at least 6 characters long.',
        },
        {
            type: 'maxlength',
            message: 'Password must be at most 6 characters long.',
        },
        { type: 'passwordNotMatch', message: 'Passwords are not the same' },
    ],
    pattern: [
        { type: 'required', message: 'Field is required.' },
        { type: 'pattern', message: 'Field is invalid.' },
    ],
    required: [
        {
            type: 'required',
            message: ' is required.',
        },
        {
            type: 'minlength',
            message: ' must be at least 2 characters long.',
        },
    ],
    sex: [
        {
            type: 'required',
            message: 'Sex is required.',
        },
    ],
    subjectName: [
        { type: 'required', message: 'Subject name is required.' },
        {
            type: 'minlength',
            message: 'Subject name must be at least 2 characters long.',
        },
    ],
    unique: [
        {
            type: 'notUnique',
            message: ' already exists.',
        },
    ],
    username: [
        {
            type: 'required',
            message: 'is required.',
        },
        {
            type: 'pattern',
            message: "Only letters,numbers and '_' are allowed.",
        },
    ],
    url: [
        {
            type: 'required',
            message: 'URL is required.',
        },
        {
            type: 'pattern',
            message: 'It does not match a URL',
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1tZXNzYWdlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9jb25maWcvdmFsaWRhdGlvbi1tZXNzYWdlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7SUFDdEMsTUFBTSxFQUFFO1FBQ04sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUU7UUFDOUM7WUFDRSxJQUFJLEVBQUUsV0FBVztZQUNqQixPQUFPLEVBQUUsaURBQWlEO1NBQzNEO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsV0FBVztZQUNqQixPQUFPLEVBQUUsaURBQWlEO1NBQzNEO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsV0FBVztZQUNqQixPQUFPLEVBQUUsa0RBQWtEO1NBQzVEO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsV0FBVztZQUNqQixPQUFPLEVBQUUsa0RBQWtEO1NBQzVEO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsV0FBVztZQUNqQixPQUFPLEVBQUUsa0JBQWtCO1NBQzVCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSx5Q0FBeUM7U0FDbkQ7UUFDRDtZQUNFLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLHlCQUF5QjtTQUNuQztRQUNELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO1FBQzFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO1FBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUU7UUFDL0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0tBQ25CO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFF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RUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRTtRQUVuRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFO0tBQ2xEO0lBQ0QsUUFBUSxFQUFFO1FBQ1I7WUFDRSxJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUUsZUFBZTtTQUN6QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLFdBQVc7WUFDakIsT0FBTyxFQUFFLHNDQUFzQztTQUNoRDtLQUNGO0lBQ0QsR0FBRyxFQUFFO1FBQ0g7WUFDRSxJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUUsa0JBQWtCO1NBQzVCO0tBQ0Y7SUFDRCxXQUFXLEVBQUU7UUFDWCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFO1FBQzFEO1lBQ0UsSUFBSSxFQUFFLFdBQVc7WUFDakIsT0FBTyxFQUFFLGtEQUFrRDtTQUM1RDtLQUNGO0lBQ0QsTUFBTSxFQUFFO1FBQ047WUFDRSxJQUFJLEVBQUUsV0FBVztZQUNqQixPQUFPLEVBQUUsa0JBQWtCO1NBQzVCO0tBQ0Y7SUFDRCxRQUFRLEVBQUU7UUFDUjtZQUNFLElBQUksRUFBRSxVQUFVO1lBQ2hCLE9BQU8sRUFBRSxjQUFjO1NBQ3hCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSwyQ0FBMkM7U0FDckQ7S0FDRjtJQUNELEdBQUcsRUFBRTtRQUNIO1lBQ0UsSUFBSSxFQUFFLFVBQVU7WUFDaEIsT0FBTyxFQUFFLGtCQUFrQjtTQUM1QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUseUJBQXlCO1NBQ25DO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjb25zdCBjb25maWdWYWxpZGF0aW9uTWVzc2FnZXMgPSB7XG4gIG5vcm1hbDogWyBcbiAgICB7IHR5cGU6ICdyZXF1aXJlZCcsIG1lc3NhZ2U6ICcgaXMgcmVxdWlyZWQuJyB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtYXhMZW5ndGgnLFxuICAgICAgbWVzc2FnZTogJyBtdXN0IGJlIGF0IG1vc3Qge3ttYXhMZW5ndGh9fSBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtYXhsZW5ndGgnLFxuICAgICAgbWVzc2FnZTogJyBtdXN0IGJlIGF0IG1vc3Qge3ttYXhMZW5ndGh9fSBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtaW5MZW5ndGgnLFxuICAgICAgbWVzc2FnZTogJyBtdXN0IGJlIGF0IGxlYXN0IHt7bWluTGVuZ3RofX0gY2hhcmFjdGVycyBsb25nLicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnbWlubGVuZ3RoJyxcbiAgICAgIG1lc3NhZ2U6ICcgbXVzdCBiZSBhdCBsZWFzdCB7e21pbkxlbmd0aH19IGNoYXJhY3RlcnMgbG9uZy4nLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ25vdFVuaXF1ZScsXG4gICAgICBtZXNzYWdlOiAnIGFscmVhZHkgZXhpc3RzLicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICBtZXNzYWdlOiAnRGF0ZSBzaG91bGQgYmUgaW4gdGhlIGRkL21tL3l5eXkgZm9ybWF0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd1c2VkJyxcbiAgICAgIG1lc3NhZ2U6ICcgaGFzIGFscmVhZHkgYmVlbiB1c2VkLicsXG4gICAgfSxcbiAgICB7IHR5cGU6ICdlbWFpbCcsIG1lc3NhZ2U6ICcgaXMgaW52YWxpZC4nIH0sXG4gICAgeyB0eXBlOiAncGF0dGVybicsIG1lc3NhZ2U6ICcgaXMgaW52YWxpZC4nIH0sXG4gICAgeyB0eXBlOiAnbm90Rm91bmQnLCBtZXNzYWdlOiBcIiBkb2Vzbid0IGV4aXN0XCIgfSxcbiAgICB7IHR5cGU6ICdjdXN0b20nIH0sXG4gIF0sXG4gIGFkZHJlc3M6IFtcbiAgICB7IHR5cGU6ICdyZXF1aXJlZCcsIG1lc3NhZ2U6ICdBZGRyZXNzIGlzIHJlcXVpcmVkLicgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnbWlubGVuZ3RoJyxcbiAgICAgIG1lc3NhZ2U6ICdBZGRyZXNzIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgICB9LFxuICBdLFxuICBhZGRyZXNzTEdBOiBbXG4gICAge1xuICAgICAgdHlwZTogJ3JlcXVpcmVkJyxcbiAgICAgIG1lc3NhZ2U6ICdMb2NhbCBnb3Zlcm5tZW50IG9mIGFkZHJlc3MgaXMgcmVxdWlyZWQuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtaW5sZW5ndGgnLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ0xvY2FsIGdvdmVybm1lbnQgb2YgYWRkcmVzcyBtdXN0IGJlIGF0IGxlYXN0IDIgY2hhcmFjdGVycyBsb25nLicsXG4gICAgfSxcbiAgXSxcbiAgY2xhc3NOYW1lOiBbXG4gICAgeyB0eXBlOiAncmVxdWlyZWQnLCBtZXNzYWdlOiAnQ2xhc3MgbmFtZSBpcyByZXF1aXJlZC4nIH0sXG4gICAge1xuICAgICAgdHlwZTogJ21pbmxlbmd0aCcsXG4gICAgICBtZXNzYWdlOiAnQ2xhc3MgbmFtZSBtdXN0IGJlIGF0IGxlYXN0IDIgY2hhcmFjdGVycyBsb25nLicsXG4gICAgfSxcbiAgXSxcbiAgY2xhc3NTZWN0aW9uOiBbXG4gICAgeyB0eXBlOiAncmVxdWlyZWQnLCBtZXNzYWdlOiAnQ2xhc3Mgc2VjdGlvbiBpcyByZXF1aXJlZC4nIH0sXG4gICAge1xuICAgICAgdHlwZTogJ21pbmxlbmd0aCcsXG4gICAgICBtZXNzYWdlOiAnQ2xhc3Mgc2VjdGlvbiBtdXN0IGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyIGxvbmcuJyxcbiAgICB9LFxuICBdLFxuICBlbWFpbDogW1xuICAgIHsgdHlwZTogJ3JlcXVpcmVkJywgbWVzc2FnZTogJ0VtYWlsIGlzIHJlcXVpcmVkLicgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnbWlubGVuZ3RoJyxcbiAgICAgIG1lc3NhZ2U6ICdFbWFpbCBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycyBsb25nLicsXG4gICAgfSxcbiAgICB7IHR5cGU6ICdwYXR0ZXJuJywgbWVzc2FnZTogJ0VtYWlsIG11c3QgYmUgdmFsaWQuJyB9LFxuICAgIHsgdHlwZTogJ2VtYWlsJywgbWVzc2FnZTogJ0VtYWlsIG11c3QgYmUgdmFsaWQnIH0sXG4gICAge1xuICAgICAgdHlwZTogJ25vdFVuaXF1ZScsXG4gICAgICBtZXNzYWdlOiAnRW1haWwgYWxyZWFkeSBleGlzdHMuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdlcXVhbFRvT3RoZXInLFxuICAgICAgbWVzc2FnZTogXCJBbHRlcm5hdGUgZW1haWwgY2FuJ3QgYmUgdGhlIHNhbWUgYXMgZW1haWxcIixcbiAgICB9LFxuICBdLFxuICBlbnRpdHlOdW1iZXI6IFtcbiAgICB7IHR5cGU6ICdyZXF1aXJlZCcsIG1lc3NhZ2U6ICcgaXMgcmVxdWlyZWQuJyB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdpbnZhbGlkJyxcbiAgICAgIG1lc3NhZ2U6ICcgaXMgaW52YWxpZC4nLFxuICAgIH0sXG4gICAgeyB0eXBlOiAnbm90Rm91bmQnLCBtZXNzYWdlOiAnIHdhcyBub3QgZm91bmQuJyB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdub3RVbmlxdWUnLFxuICAgICAgbWVzc2FnZTogJyBhbHJlYWR5IGV4aXN0cy4nLFxuICAgIH0sXG4gIF0sXG4gIGZpcnN0bmFtZTogW1xuICAgIHsgdHlwZTogJ3JlcXVpcmVkJywgbWVzc2FnZTogJ0ZpcnN0IE5hbWUgaXMgcmVxdWlyZWQuJyB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtaW5sZW5ndGgnLFxuICAgICAgbWVzc2FnZTogJ05hbWUgbXVzdCBiZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnMgbG9uZy4nLFxuICAgIH0sXG4gIF0sXG4gIGxhc3RuYW1lOiBbXG4gICAgeyB0eXBlOiAncmVxdWlyZWQnLCBtZXNzYWdlOiAnTGFzdCBOYW1lIGlzIHJlcXVpcmVkLicgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnbWlubGVuZ3RoJyxcbiAgICAgIG1lc3NhZ2U6ICdOYW1lIG11c3QgYmUgYXQgbGVhc3QgMiBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgICB9LFxuICBdLFxuICBsZ2E6IFtcbiAgICB7XG4gICAgICB0eXBlOiAncmVxdWlyZWQnLFxuICAgICAgbWVzc2FnZTogJ0xvY2FsIGdvdmVybm1lbnQgb2Ygb3JpZ2luIGlzIHJlcXVpcmVkLicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnbWlubGVuZ3RoJyxcbiAgICAgIG1lc3NhZ2U6ICdMb2NhbCBnb3Zlcm5tZW50IG9mIG9yaWdpbiBtdXN0IGJlIGF0IGxlYXN0IDIgY2hhcmFjdGVycyBsb25nLicsXG4gICAgfSxcbiAgXSxcbiAgbWFpZGVuTmFtZTogW1xuICAgIHsgdHlwZTogJ3JlcXVpcmVkJywgbWVzc2FnZTogJ01haWRlbiBOYW1lIGlzIHJlcXVpcmVkLicgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnbWlubGVuZ3RoJyxcbiAgICAgIG1lc3NhZ2U6ICdNYWlkZW4gTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDIgY2hhcmFjdGVycyBsb25nLicsXG4gICAgfSxcbiAgXSxcblxuICBtb2JpbGU6IFtcbiAgICB7IHR5cGU6ICdyZXF1aXJlZCcsIG1lc3NhZ2U6ICdQaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQuJyB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtaW5sZW5ndGgnLFxuICAgICAgbWVzc2FnZTogJ1Bob25lIG51bWJlciBtdXN0IGJlIGF0IGxlYXN0IDExIGNoYXJhY3RlcnMgbG9uZy4nLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ25vdFVuaXF1ZScsXG4gICAgICBtZXNzYWdlOiAnUGhvbmUgbnVtYmVyIGFscmVhZHkgZXhpc3RzLicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnZXF1YWxUb090aGVyJyxcbiAgICAgIG1lc3NhZ2U6IFwiQWx0ZXJuYXRlIHBob25lIG51bWJlciBjYW4ndCBiZSB0aGUgc2FtZSBhcyBwaG9uZSBudW1iZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdpbnZhbGlkJyxcbiAgICAgIG1lc3NhZ2U6ICdQaG9uZSBudW1iZXIgaXMgaW52YWxpZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnY291bnRyeUNvZGUnLFxuICAgICAgbWVzc2FnZTogJ0NvdW50cnkgY29kZSBpcyBpbnZhbGlkJyxcbiAgICB9LFxuICBdLFxuICBuYW1lOiBbXG4gICAgeyB0eXBlOiAncmVxdWlyZWQnLCBtZXNzYWdlOiAnIGlzIHJlcXVpcmVkLicgfSxcbiAgICB7XG4gICAgICB0eXBlOiAncGF0dGVybicsXG4gICAgICBtZXNzYWdlOiBcIiBjYW4gb25seSBjb250YWluIGxldHRlcnMsIG51bWJlcnMgYW5kICctJy5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtaW5sZW5ndGgnLFxuICAgICAgbWVzc2FnZTogJyBtdXN0IGJlIGF0IGxlYXN0IDIgY2hhcmFjdGVycyBsb25nLicsXG4gICAgfSxcbiAgXSxcbiAgbnVtYmVyczogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgIG1lc3NhZ2U6ICdUaGlzIGZpZWxkIG11c3QgYmUgYSBudW1iZXIuJyxcbiAgICB9LFxuICAgIHsgdHlwZTogJ3JlcXVpcmVkJywgbWVzc2FnZTogJ0EgdmFsdWUgaXMgcmVxdWlyZWQuJyB9LFxuICBdLFxuXG4gIG9jY3VwYXRpb246IFtcbiAgICB7IHR5cGU6ICdyZXF1aXJlZCcsIG1lc3NhZ2U6ICdPY2N1cGF0aW9uIGlzIHJlcXVpcmVkLicgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnbWlubGVuZ3RoJyxcbiAgICAgIG1lc3NhZ2U6ICdPY2N1cGF0aW9uIG11c3QgYmUgYXQgbGVhc3QgMiBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgICB9LFxuICBdLFxuXG4gIG90aGVybmFtZTogW1xuICAgIHsgdHlwZTogJ3JlcXVpcmVkJywgbWVzc2FnZTogJ090aGVyIE5hbWUgaXMgcmVxdWlyZWQuJyB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtaW5sZW5ndGgnLFxuICAgICAgbWVzc2FnZTogJ05hbWUgbXVzdCBiZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnMgbG9uZy4nLFxuICAgIH0sXG4gIF0sXG4gIHBhc3N3b3JkOiBbXG4gICAgeyB0eXBlOiAncmVxdWlyZWQnLCBtZXNzYWdlOiAnUGFzc3dvcmQgaXMgcmVxdWlyZWQuJyB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtaW5sZW5ndGgnLFxuICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtYXhsZW5ndGgnLFxuICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbW9zdCA2IGNoYXJhY3RlcnMgbG9uZy4nLFxuICAgIH0sXG4gICAgeyB0eXBlOiAncGFzc3dvcmROb3RNYXRjaCcsIG1lc3NhZ2U6ICdQYXNzd29yZHMgYXJlIG5vdCB0aGUgc2FtZScgfSxcbiAgXSxcbiAgcGF0dGVybjogW1xuICAgIHsgdHlwZTogJ3JlcXVpcmVkJywgbWVzc2FnZTogJ0ZpZWxkIGlzIHJlcXVpcmVkLicgfSxcblxuICAgIHsgdHlwZTogJ3BhdHRlcm4nLCBtZXNzYWdlOiAnRmllbGQgaXMgaW52YWxpZC4nIH0sXG4gIF0sXG4gIHJlcXVpcmVkOiBbXG4gICAge1xuICAgICAgdHlwZTogJ3JlcXVpcmVkJyxcbiAgICAgIG1lc3NhZ2U6ICcgaXMgcmVxdWlyZWQuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtaW5sZW5ndGgnLFxuICAgICAgbWVzc2FnZTogJyBtdXN0IGJlIGF0IGxlYXN0IDIgY2hhcmFjdGVycyBsb25nLicsXG4gICAgfSxcbiAgXSxcbiAgc2V4OiBbXG4gICAge1xuICAgICAgdHlwZTogJ3JlcXVpcmVkJyxcbiAgICAgIG1lc3NhZ2U6ICdTZXggaXMgcmVxdWlyZWQuJyxcbiAgICB9LFxuICBdLFxuICBzdWJqZWN0TmFtZTogW1xuICAgIHsgdHlwZTogJ3JlcXVpcmVkJywgbWVzc2FnZTogJ1N1YmplY3QgbmFtZSBpcyByZXF1aXJlZC4nIH0sXG4gICAge1xuICAgICAgdHlwZTogJ21pbmxlbmd0aCcsXG4gICAgICBtZXNzYWdlOiAnU3ViamVjdCBuYW1lIG11c3QgYmUgYXQgbGVhc3QgMiBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgICB9LFxuICBdLFxuICB1bmlxdWU6IFtcbiAgICB7XG4gICAgICB0eXBlOiAnbm90VW5pcXVlJyxcbiAgICAgIG1lc3NhZ2U6ICcgYWxyZWFkeSBleGlzdHMuJyxcbiAgICB9LFxuICBdLFxuICB1c2VybmFtZTogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdyZXF1aXJlZCcsXG4gICAgICBtZXNzYWdlOiAnaXMgcmVxdWlyZWQuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgIG1lc3NhZ2U6IFwiT25seSBsZXR0ZXJzLG51bWJlcnMgYW5kICdfJyBhcmUgYWxsb3dlZC5cIixcbiAgICB9LFxuICBdLFxuICB1cmw6IFtcbiAgICB7XG4gICAgICB0eXBlOiAncmVxdWlyZWQnLFxuICAgICAgbWVzc2FnZTogJ1VSTCBpcyByZXF1aXJlZC4nLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3BhdHRlcm4nLFxuICAgICAgbWVzc2FnZTogJ0l0IGRvZXMgbm90IG1hdGNoIGEgVVJMJyxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==