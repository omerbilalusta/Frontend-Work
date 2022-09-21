import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";
import Navi from "../navi/Navi";

const ProductDetail = (
    { categories,
        product,
        onSave,
        onChange,
        errors }
) => {
    return (
        <div>
            <Navi />
            <form onSubmit={onSave}>
                <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
                <TextInput
                    name="productName"
                    label="Ürün İsmi"
                    value={product.productName}
                    onChange={onChange}
                    error={errors.productName}
                ></TextInput>

                <SelectInput name="categoryId" label="Kategori" value={product.categoryId || ""} defaultOption="Seçiniz" options={categories.map(category => ({
                    value: category.id,
                    text: category.categoryName
                }))}
                    onChange={onChange}
                    error={errors.categoryId}
                >
                </SelectInput>
                
                <TextInput
                    name="unitPrice"
                    label="Birim Fiyatı"
                    value={product.unitPrice}
                    onChange={onChange}
                    error={errors.unitPrice}
                ></TextInput>

                <TextInput
                    name="quantityPerUnit"
                    label="Ürün Başına Miktar"
                    value={product.quantityPerUnit}
                    onChange={onChange}
                    error={errors.quantityPerUnit}
                ></TextInput>

                <TextInput
                    name="unitsInStock"
                    label="Stok Adedi"
                    value={product.unitsInStock}
                    onChange={onChange}
                    error={errors.unitsInStock}
                ></TextInput>



                <button type="submit" className="btn btn-success">Kaydet</button>
            </form>
        </div>
    )
}

export default ProductDetail;