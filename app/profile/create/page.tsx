import FormContainer from '@/components/form/FormContainer'
import FormInput from "@/components/form/FormInput"
import { SubmitButton } from "@/components/form/Button"
import { createProfileAction } from "@/utils/actions"


const CreateProfilePage = () => {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>

            <div className="border p-8 rounded-md">
                <FormContainer action={createProfileAction}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput type="text" name="firstName" label="First Name" placeholder="Please Enter Your First Name" />
                        <FormInput type="text" name="lastName" label="Last Name" placeholder="Please Enter Your Last Name" />
                        <FormInput type="text" name="username" label="Username" placeholder="Please Enter Your Username" />
                    </div>

                    <SubmitButton text="Create Profile" className="mt-8" />
                </FormContainer>
            </div>
        </section>
    );
}

export default CreateProfilePage