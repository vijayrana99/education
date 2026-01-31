export declare class SettingAction {
    findAll(): Promise<any>;
    upsert(key: string, value: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        value: string;
    }>;
}
export declare const settingAction: SettingAction;
//# sourceMappingURL=setting.action.d.ts.map