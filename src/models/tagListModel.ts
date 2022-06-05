const localStorageKeyName = 'tagList'
type TagListModel = {
    data: string[]
    fetch: () => string[]
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
        if (this.data.indexOf(name) >= 0) { return 'duplicated' }
        this.data.push(name)
        this.save()
        return 'success';
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}

export default model2 