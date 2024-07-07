import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link';
import { HiMail, HiUser } from 'react-icons/hi'
import { BsChatTextFill } from 'react-icons/bs'
import Footer from '../components/Footer';
import { Modal } from 'antd';
import { DETAILS, CONTACTS,SOCIAL_LINKS } from '../constants/constants';

const Contact = () => {
    const { GITHUB, LINKEDIN, TWITTER, FACEBOOK } = SOCIAL_LINKS;
    const [isOpen, setIsOpen] = useState(false)

    return (
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>País:</span>
                                <span className='text-LightGray md:text-sm'>{DETAILS.Residence}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Cidade:</span>
                                <span className='text-LightGray md:text-sm'>{DETAILS.City}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Empresa:</span>
                                <span className='text-LightGray md:text-sm'>{DETAILS.company}</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.EMAIL}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>{SOCIAL_LINKS.LINKEDIN}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Telefone:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.PHONE}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
        {CONTACTS.EMAIL && <a className='hover:scale-125 ease-in-out duration-700' href={`mailto:${CONTACTS.EMAIL}`} target='_blank' rel="noreferrer"><HiMail /></a>}
        {(GITHUB && GITHUB.startsWith('https://github.com')) && <a className='hover:scale-125 ease-in-out duration-700' href={GITHUB} target='_blank' rel="noreferrer"><FaGithub /></a>}
        {(LINKEDIN && LINKEDIN.startsWith('https://linkedin.com')) && <a className='hover:scale-125 ease-in-out duration-700' href={LINKEDIN} target='_blank' rel="noreferrer"><FaLinkedin /></a>}
        {(TWITTER && (TWITTER.startsWith('https://x.com/') || TWITTER.startsWith('https://twitter.com/'))) && <a className='hover:scale-125 ease-in-out duration-700' href={TWITTER} target='_blank' rel="noreferrer"><FaTwitter /></a>}
        {/* {(SOCIAL_LINKS.FIVERR && GITHUB.startsWith('https://github.com')) && <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href={SOCIAL_LINKS.FIVERR} target='_blank' rel="noreferrer"><FiverrIcon /></a>} */}
        {/* <a className='hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1' href="#" target='_blank' rel="noreferrer"><SiUpwork /></a> */}
    </div>


                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Entrar em Contato</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <div>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input type="text" className="input_stylings" placeholder="Name" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input type="text" className="input_stylings" placeholder="Email" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea rows={6} cols={50} className="input_stylings" placeholder="Message" />
                                </div>
                            </div>

                            <div className="my-4">
                                <button onClick={() => setIsOpen(true)} className="button"> ENVIAR MENSAGEM </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* success modal */}
            <Modal
                className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                // wrapClassName='bg-red-800'
                centered
                open={isOpen}
                footer={null}
                closable={false}
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
            >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-Green font-bold text-2xl'>In Progress</h1>
                    <Link href={SOCIAL_LINKS.GITHUB} passHref>
                        <a className='underline text-Snow' target='_blank' rel="noreferrer">Be the one to integrate this!</a>
                    </Link>
                </div>
            </Modal>
            <Footer />
        </BannerLayout>

    )
}

export default Contact