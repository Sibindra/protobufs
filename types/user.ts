// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "user.proto" (package "userpackage", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message userpackage.User
 */
export interface User {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string email = 2;
     */
    email: string;
    /**
     * @generated from protobuf field: userpackage.UserRole role = 3;
     */
    role: UserRole;
}
/**
 * @generated from protobuf message userpackage.UserList
 */
export interface UserList {
    /**
     * @generated from protobuf field: repeated userpackage.User users = 1;
     */
    users: User[];
}
/**
 * @generated from protobuf enum userpackage.UserRole
 */
export enum UserRole {
    /**
     * @generated from protobuf enum value: ADMIN = 0;
     */
    ADMIN = 0,
    /**
     * @deprecated
     * @generated from protobuf enum value: USER = 1 [deprecated = true];
     */
    USER = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class User$Type extends MessageType<User> {
    constructor() {
        super("userpackage.User", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "role", kind: "enum", T: () => ["userpackage.UserRole", UserRole] }
        ]);
    }
    create(value?: PartialMessage<User>): User {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.email = "";
        message.role = 0;
        if (value !== undefined)
            reflectionMergePartial<User>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: User): User {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string email */ 2:
                    message.email = reader.string();
                    break;
                case /* userpackage.UserRole role */ 3:
                    message.role = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: User, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string email = 2; */
        if (message.email !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.email);
        /* userpackage.UserRole role = 3; */
        if (message.role !== 0)
            writer.tag(3, WireType.Varint).int32(message.role);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message userpackage.User
 */
export const User = new User$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UserList$Type extends MessageType<UserList> {
    constructor() {
        super("userpackage.UserList", [
            { no: 1, name: "users", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => User }
        ]);
    }
    create(value?: PartialMessage<UserList>): UserList {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.users = [];
        if (value !== undefined)
            reflectionMergePartial<UserList>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserList): UserList {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated userpackage.User users */ 1:
                    message.users.push(User.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserList, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated userpackage.User users = 1; */
        for (let i = 0; i < message.users.length; i++)
            User.internalBinaryWrite(message.users[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message userpackage.UserList
 */
export const UserList = new UserList$Type();
