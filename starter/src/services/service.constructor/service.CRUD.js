const CRUDServiceConstructor = function(model) {
    this.model = model;

    // Methods CRUD
    this.findAll = async () => {
        return await this.model.find({});
    };

    this.findById = async (id) => {
        return await this.model.findById(id);
    };

    this.create = async (createData) => {
        return await this.model.create(createData);
    };

    this.updateById = async (id, updateData) => {
        return await this.model.updateOne({ _id: id }, updateData);
    };

    this.deleteById = async (id) => {
        await this.model.deleteOne({ _id: id });
    };
};

module.exports = CRUDServiceConstructor;