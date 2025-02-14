import { Button } from '@/components/ui/button'
import React, { FC } from 'react'
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai'
import { FaRegBuilding } from 'react-icons/fa'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { IoCalendarOutline, IoSettingsOutline } from 'react-icons/io5'
import { LuUsers } from 'react-icons/lu'
import { MdLogout } from 'react-icons/md'

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = ({ }) => {
    return (
        <div className="pb-12 min-h-screen">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold">
                        Dashboard
                    </h2>
                    <div className="space-y-3">
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <AiOutlineHome className="mr-2 text-lg"/>
                            Home
                        </Button>
                    </div>
                    <div className="space-y-3">
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <AiOutlineMessage className="mr-2 text-lg"/>
                            Message
                        </Button>
                    </div>
                    <div className="space-y-3">
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <FaRegBuilding  className="mr-2 text-lg"/>
                            Company Profile
                        </Button>
                    </div>
                    <div className="space-y-3">
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <LuUsers  className="mr-2 text-lg"/>
                            All Applicants
                        </Button>
                    </div>
                    <div className="space-y-3">
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <HiOutlineClipboardDocumentList  className="mr-2 text-lg"/>
                            Job Listing
                        </Button>
                    </div>
                    <div className="space-y-3">
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <IoCalendarOutline  className="mr-2 text-lg"/>
                            My Schedule
                        </Button>
                    </div>
                </div>
            </div>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold">
                        Setting
                    </h2>
                    <div className="space-y-3">
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <IoSettingsOutline  className="mr-2 text-lg"/>
                        Settings
                        </Button>
                    </div>
                    <div className="space-y-3">
                        <Button variant={'ghost'} className='w-full text-red-500 hover:text-red-500 justify-start rounded-none hover:bg-red-200'>
                        <MdLogout className="mr-2 text-lg"/>
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar