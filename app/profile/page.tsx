import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput";
import { updateProfileAction, updateProfileImageAction, fetchProfile } from '@/utils/actions';
import { SubmitButton } from "@/components/form/Button";
import ImageInputContainer from '@/components/form/ImageInputContainer';
import ImageInput from "@/components/form/ImageInput";


const ProfilePage = async () => {
    const profile = await fetchProfile();

    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">User Profile</h1>

            <div className="border p-8 rounded-md">
                <ImageInputContainer image={profile.profileImage} name={profile.username} action={updateProfileImageAction} text="Update Profile Image" />
                <FormContainer action={updateProfileAction}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput type="text" name="firstName" label="First Name" placeholder="Please Enter Your First Name" default={profile.firstName} />
                        <FormInput type="text" name="lastName" label="Last Name" placeholder="Please Enter Your Last Name" default={profile.lastName} />
                        <FormInput type="text" name="username" label="Username" placeholder="Please Enter Your Username" default={profile.username} />
                    </div>

                    <SubmitButton text="Create Profile" className="mt-8" />
                </FormContainer>
            </div>
        </section>
    );
}

export default ProfilePage