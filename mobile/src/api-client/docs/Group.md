# Group


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**deletedAt** | **string** |  | [default to undefined]
**_version** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**isPublic** | **boolean** |  | [default to undefined]
**membersNeedActivation** | **boolean** |  | [default to undefined]
**owner** | [**User**](User.md) |  | [default to undefined]
**memberships** | [**Array&lt;GroupMember&gt;**](GroupMember.md) |  | [default to undefined]
**users** | [**Array&lt;GroupUser&gt;**](GroupUser.md) |  | [default to undefined]

## Example

```typescript
import { Group } from './api';

const instance: Group = {
    id,
    createdAt,
    updatedAt,
    deletedAt,
    _version,
    name,
    isPublic,
    membersNeedActivation,
    owner,
    memberships,
    users,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
