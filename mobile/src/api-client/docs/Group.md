# Group


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**isPublic** | **boolean** |  | [default to undefined]
**membersNeedActivation** | **boolean** |  | [default to undefined]
**owner** | [**User**](User.md) |  | [default to undefined]
**memberships** | [**Array&lt;GroupMember&gt;**](GroupMember.md) |  | [default to undefined]

## Example

```typescript
import { Group } from './api';

const instance: Group = {
    name,
    isPublic,
    membersNeedActivation,
    owner,
    memberships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
