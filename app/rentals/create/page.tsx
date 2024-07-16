import FormInput from "@/components/form/FormInput"
import FormContainer from "@/components/form/FormContainer"
import { createPropertyAction } from "@/utils/actions"
import { SubmitButton } from "@/components/form/Button"
import PriceInput from "@/components/form/PriceInput"
import CategoriesInput from "@/components/form/CategoriesInput"
import TextAreaInput from "@/components/form/TextareaInput"
import CountriesInput from '@/components/form/CountriesInput'
import ImageInput from "@/components/form/ImageInput"
import CounterInput from "@/components/form/CounterInput"
import AmenitiesInput from "@/components/form/AmenitiesInput"

const CreatePropertyPage = () => {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">Create Property</h1>

            <div className="border p-8 rounded">
                <h3 className="text-lg mb-4 font-medium">General Info</h3>

                <FormContainer action={createPropertyAction}>
                    <div className="grid md:grid-cols-2 gap-8 mb-4">
                        <FormInput name="name" type="text" label="Name" default="Apartment In Ho Chi Minh City" />
                        <FormInput name="tagline" type="text" label="Tagline" default="Apartment In Ho Chi Minh City" />
                        <PriceInput />
                        <CategoriesInput />
                    </div>

                    <TextAreaInput name="description" labelText="Description" defaultValue="Property description" />

                    <div className="grid sm:grid-cols-2 gap-8 mt-4">
                        <CountriesInput />
                        <ImageInput />
                    </div>

                    <h3 className="tex-lg mt-8 mb-4 font-medium">Accommodation Details</h3>

                    <CounterInput detail="guests" />
                    <CounterInput detail="bedrooms" />
                    <CounterInput detail="beds" />
                    <CounterInput detail="baths" />

                    <h3 className="tex-lg mt-8 mb-4 font-medium">Amenities</h3>
                    <AmenitiesInput />
                    <SubmitButton text="Create Property" className="mt-12" />
                </FormContainer>
            </div>
        </section>
    )
}

export default CreatePropertyPage