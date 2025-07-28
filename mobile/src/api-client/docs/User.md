# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**deletedAt** | **string** |  | [default to undefined]
**_version** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**password** | **string** |  | [default to undefined]
**role** | **string** |  | [default to undefined]
**isActive** | **boolean** |  | [default to undefined]
**marks** | [**Array&lt;Mark&gt;**](Mark.md) |  | [default to undefined]
**klassMemberships** | [**Array&lt;KlassMember&gt;**](KlassMember.md) |  | [default to undefined]
**groupMemberships** | [**Array&lt;GroupMember&gt;**](GroupMember.md) |  | [default to undefined]

## Example

```typescript
import { User } from './api';

const instance: User = {
    id,
    createdAt,
    updatedAt,
    deletedAt,
    _version,
    name,
    email,
    password,
    role,
    isActive,
    marks,
    klassMemberships,
    groupMemberships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
