const localStorageKeyName = 'tagList'
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated'  //string //联合类型 success成功 duplicated表示name重复
    save: () => void
}
const model2: TagListModel = {
    data: [],

    fetch() {
        this.data = JSON.parse(window.localStorage.getItem("localStorageKeyName") || "[]")
        return this.data;
    },
    create(name: string) {
        const names = this.data.map(item => item.name)
        if (names.indexOf(name) >= 0) { return 'duplicated' }
        this.data.push({id: name, name: name})
        this.save()
        return 'success';
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}

export default model2 