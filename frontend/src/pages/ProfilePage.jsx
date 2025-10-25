import React from 'react'
import {useParams} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {axiosInstance} from "../lib/axios.js";

const ProfilePage = () => {
    const { username } = useParams();
    const queryClient = useQueryClient();

    const { data: authUser, isPending } = useQuery({
        queryKey: ["authUser"],
    });

    const { data: userProfile, isPending: isUserProfileLoading} = useQuery({
        queryKey: ["userProfile", username],
        queryFn: () => axiosInstance.get(`/users/${username}`)
    });

    const { mutate: updateProfile } = useMutation({
        mutationFn: (updatedData) => {
            axiosInstance.put("/users/profile", updatedData)
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["authUser"])
        }
    })

    if (isPending || isUserProfileLoading) return null

    const isOwnProfile = authUser.username === userProfile.data.username;
    const userData = isOwnProfile ? authUser : userProfile.data;

    const handleSave = (updatedData) => {
        updateProfile(updatedData)
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ProfileHeader userData={userData} isOwnProfile={isOwnProfile} onSave={handleSave}/>
            <AboutSection userData={userData} isOwnProfile={isOwnProfile} onSave={handleSave}/>
            <ExperienceSection userData={userData} isOwnProfile={isOwnProfile} onSave={handleSave}/>
            <EducationSection userData={userData} isOwnProfile={isOwnProfile} onSave={handleSave}/>
            <SkillsSection userData={userData} isOwnProfile={isOwnProfile} onSave={handleSave}/>
        </div>
    )
}
export default ProfilePage
