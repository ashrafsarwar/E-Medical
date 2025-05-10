import React from "react";
import { TbDental } from "react-icons/tb";
import { IoBodyOutline } from "react-icons/io5";
import { FaChild } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { GiMedicines } from "react-icons/gi";
import { MdPregnantWoman } from "react-icons/md";
import { IoBody } from "react-icons/io5";
import { GiLiver } from "react-icons/gi";
import { GiMedicinePills } from "react-icons/gi";
import { GiCancer } from "react-icons/gi";

export const data = [
  {
    id: "1",
    title: "General Medicine",
    description:
      "Our general care department offers comprehensive care for a wide range of health conditions. Our team of doctors and nurses are dedicated to providing high-quality care to help you feel better.",
    about:
      "Our General Medicine department provides essential adult healthcare with a focus on prevention, diagnosis, and management of a wide range of conditions. Our physicians offer personalized care, addressing acute and chronic illnesses while emphasizing wellness and lifestyle support. We work collaboratively with specialists to ensure comprehensive, seamless treatment and enhance every patient’s quality of life.",
    treatments: [
      {
        id: "1",
        title: "Preventing Care",
        description:
          "Routine health screenings, vaccinations, and wellness check-ups to help detect and prevent health issues before they develop. Routine health screenings, vaccinations, and wellness check-ups to help detect and prevent health issues before they develop.",
      },
      {
        id: "2",
        title: "Chronic Disease Management",
        description:
          "Personalized treatment plans for managing chronic conditions like diabetes, hypertension, and heart disease.Personalized treatment plans for managing chronic conditions like diabetes, hypertension, and heart disease.",
      },
      {
        id: "3",
        title: "Acute Illness Care",
        description:
          "Diagnosis and treatment of acute illnesses like infections, flu, and other common health issues.Diagnosis and treatment of acute illnesses like infections, flu, and other common health issues.",
      },
      {
        id: "4",
        title: "Lifestyle Support",
        description:
          "Guidance on healthy living, nutrition, exercise, and stress management to help you maintain a healthy lifestyle.Guidance on healthy living, nutrition, exercise, and stress management to help you maintain a healthy lifestyle.",
      },
      {
        id: "5",
        title: "Specialist Referrals",
        description:
          "Collaboration with specialists to ensure you receive the best care for your specific health needs.Collaboration with specialists to ensure you receive the best care for your specific health needs.",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. John Doe",
        title: "Chronical Disease Specialist",
        image: "/doctor1.avif",
      },
      {
        id: "2",
        name: "Dr. Jane Doe",
        title: "Preventive Care",
        image: "/doctor2.jpg",
      },
      {
        id: "3",
        name: "Dr. John Doe",
        title: "Specialist Referrals",
        image: "/doctor5.webp",
      },
      {
        id: "4",
        name: "Dr. Jane Doe",
        title: "Active Illness Care",
        image: "/doctor3.avif",
      },
      {
        id: "5",
        name: "Dr. Jane Doe",
        title: "Lifestyle Support",
        image: "/doctor4.jpeg",
      },
    ],
    image: "/general.jpeg",
    hoverImage: "/general1.jpg",
    icon: GiMedicines,
  },
  {
    id: "2",
    title: "Gynecology",
    description:
      "Our gynecology department offers comprehensive care for a wide range of health conditions. Our team of doctors and nurses are dedicated to providing high-quality care to help you feel better.",
    about:
      "Our Gynecology department specializes in women's health, focusing on reproductive systems and related conditions. We provide comprehensive care for women of all ages, from routine check-ups to complex treatments. Our expert gynecologists are committed to delivering personalized care with a focus on prevention, early detection, and management of various gynecological issues.",
    treatments: [
      {
        id: "1",
        title: "Routine Exams",
        description:
          "Annual check-ups, Pap smears, and breast exams to monitor your reproductive health.",
      },
      {
        id: "2",
        title: "Family Planning",
        description:
          "Contraception counseling, fertility evaluations, and preconception care to help you plan your family.",
      },
      {
        id: "3",
        title: "Pregnancy Care",
        description:
          "Prenatal care, ultrasounds, and delivery services to support you throughout your pregnancy.",
      },
      {
        id: "4",
        title: "Menopause Management",
        description:
          "Treatment for menopausal symptoms, hormone replacement therapy, and osteoporosis prevention.",
      },
      {
        id: "5",
        title: "Gynecological Surgery",
        description:
          "Minimally invasive procedures, hysterectomies, and other surgical treatments for gynecological conditions.",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. John Doe",
        title: "Pregnancy Care",
        image: "/doctor1.avif",
      },
      {
        id: "2",
        name: "Dr. Jane Doe",
        title: "Menopause Management",
        image: "/doctor2.jpg",
      },
      {
        id: "3",
        name: "Dr. John Doe",
        title: "Gynecological Surgery",
        image: "/doctor3.avif",
      },
      {
        id: "4",
        name: "Dr. Jane Doe",
        title: "Family Planning",
        image: "/doctor4.jpeg",
      },
      {
        id: "5",
        name: "Dr. Jane Doe",
        title: "Routine Exams",
        image: "/doctor5.webp",
      },
    ],
    // links: [
    //   {
    //     id: "1",
    //     icon: <TbBrandLinkedin />,
    //     link: "https://www.linkedin.com/feed/",
    //   },
    //   {
    //     id: "2",
    //     icon: <RiTwitterXLine />,
    //     link: "https://twitter.com/home",
    //   },
    //   {
    //     id: "3",
    //     icon: <FaInstagram />,
    //     link: "https://www.instagram.com/",
    //   },
    // ],
    image: "/gyno.avif",
    hoverImage: "/general1.jpeg",
    icon: MdPregnantWoman,
  },
  {
    id: "3",
    title: "Internal Medicine",
    description:
      "Our internal care department offers comprehensive care for a wide range of health conditions. Our team of doctors and nurses are dedicated to providing high-quality care to help you feel better.",
    about:
      "Our Internal Medicine department specializes in the prevention, diagnosis, and treatment of adult diseases. Our internists provide comprehensive care for a wide range of health issues, from routine check-ups to complex medical conditions. We focus on promoting wellness, managing chronic diseases, and addressing acute illnesses to help you maintain optimal health.",
    treatments: [
      {
        id: "1",
        title: "Preventive Care",
        description:
          "Routine health screenings, vaccinations, and wellness check-ups to help detect and prevent health issues before they develop.",
      },
      {
        id: "2",
        title: "Chronic Disease Management",
        description:
          "Personalized treatment plans for managing chronic conditions like diabetes, hypertension, and heart disease.",
      },
      {
        id: "3",
        title: "Acute Illness Care",
        description:
          "Diagnosis and treatment of acute illnesses like infections, flu, and other common health issues.",
      },
      {
        id: "4",
        title: "Lifestyle Support",
        description:
          "Guidance on healthy living, nutrition, exercise, and stress management to help you maintain a healthy lifestyle.",
      },
      {
        id: "5",
        title: "Specialist Referrals",
        description:
          "Collaboration with specialists to ensure you receive the best care for your specific health needs.",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. John Doe",
        title: "Chronical Disease Specialist",
        image: "/doctor1.avif",
      },
      {
        id: "2",
        name: "Dr. Jane Doe",
        title: "Preventive Care",
        image: "/doctor2.jpg",
      },
      {
        id: "3",
        name: "Dr. John Doe",
        title: "Specialist Referrals",
        image: "/doctor3.avif",
      },
      {
        id: "4",
        name: "Dr. Jane Doe",
        title: "Active Illness Care",
        image: "/doctor4.jpeg",
      },
      {
        id: "5",
        name: "Dr. Jane Doe",
        title: "Lifestyle Support",
        image: "/doctor5.webp",
      },
    ],
    image: "/internal1.jpg",
    hoverImage: "/internal2.jpeg",
    icon: GiLiver,
  },
  {
    id: "4",
    title: "Dermatology",
    description:
      "Our dermatology care department offers comprehensive care for a wide range of health conditions. Our team of doctors and nurses are dedicated to providing high-quality care to help you feel better.",
    about:
      "Our Dermatology department specializes in the diagnosis and treatment of skin, hair, and nail conditions. Our dermatologists provide comprehensive care for a wide range of dermatological issues, from routine skin exams to complex treatments. We focus on promoting skin health, managing chronic skin conditions, and addressing cosmetic concerns to help you look and feel your best.",
    treatments: [
      {
        id: "1",
        title: "Skin Exams",
        description:
          "Comprehensive skin evaluations to detect and treat skin conditions early.",
      },
      {
        id: "2",
        title: "Acne Treatment",
        description:
          "Personalized treatment plans for acne, including medications, topical creams, and lifestyle recommendations.",
      },
      {
        id: "3",
        title: "Skin Cancer Screening",
        description:
          "Regular screenings to detect skin cancer early and provide prompt treatment.",
      },
      {
        id: "4",
        title: "Cosmetic Procedures",
        description:
          "Aesthetic treatments like Botox, fillers, laser therapy, and chemical peels to enhance your appearance.",
      },
      {
        id: "5",
        title: "Hair and Nail Care",
        description:
          "Diagnosis and treatment of hair loss, nail infections, and other hair and nail conditions.",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. John Doe",
        title: "Acne Specialist",
        image: "/doctor1.avif",
      },
      {
        id: "2",
        name: "Dr. Jane Doe",
        title: "Cosmetic Dermatologist",
        image: "/doctor2.jpg",
      },
      {
        id: "3",
        name: "Dr. John Doe",
        title: "Skin Cancer Specialist",
        image: "/doctor3.avif",
      },
      {
        id: "4",
        name: "Dr. Jane Doe",
        title: "Hair and Nail Specialist",
        image: "/doctor4.jpeg",
      },
      {
        id: "5",
        name: "Dr. Jane Doe",
        title: "Skin Specialist",
        image: "/doctor5.webp",
      },
    ],
    image: "/dermatology1.png",
    hoverImage: "/dermatology2.jpeg",
    icon: GiMedicinePills,
  },
  {
    id: "5",
    title: "Orthopedics",
    description:
      "Our orthopedics care department offers comprehensive care for a wide range of health conditions. Our team of doctors and nurses are dedicated to providing high-quality care to help you feel better.",
    about:
      "Our Orthopedics department specializes in the diagnosis and treatment of musculoskeletal conditions, including bones, joints, ligaments, tendons, and muscles. Our orthopedic surgeons provide comprehensive care for a wide range of orthopedic issues, from routine check-ups to complex treatments. We focus on promoting mobility, managing chronic conditions, and addressing acute injuries to help you stay active and pain-free.",
    treatments: [
      {
        id: "1",
        title: "Joint Replacement",
        description:
          "Surgical procedures to replace damaged joints with artificial implants, such as hip or knee replacements.",
      },
      {
        id: "2",
        title: "Fracture Care",
        description:
          "Treatment for broken bones, including casting, splinting, and surgical repair.",
      },
      {
        id: "3",
        title: "Sports Medicine",
        description:
          "Preventive care, treatment, and rehabilitation for sports-related injuries and conditions.",
      },
      {
        id: "4",
        title: "Arthroscopic Surgery",
        description:
          "Minimally invasive procedures to diagnose and treat joint problems, such as torn ligaments or cartilage.",
      },
      {
        id: "5",
        title: "Physical Therapy",
        description:
          "Customized exercise programs and rehabilitation to improve strength, flexibility, and mobility.",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. John Doe",
        title: "Joint Replacement Specialist",
        image: "/doctor1.avif",
      },
      {
        id: "2",
        name: "Dr. Jane Doe",
        title: "Fracture Care Specialist",
        image: "/doctor2.jpg",
      },
      {
        id: "3",
        name: "Dr. John Doe",
        title: "Sports Medicine Specialist",
        image: "/doctor3.avif",
      },
      {
        id: "4",
        name: "Dr. Jane Doe",
        title: "Arthroscopic Surgery Specialist",
        image: "/doctor4.jpeg",
      },
      {
        id: "5",
        name: "Dr. Jane Doe",
        title: "Physical Therapy Specialist",
        image: "/doctor5.webp",
      },
    ],
    image: "/orthopedics1.jpg",
    hoverImage: "/orthopedics2.jpg",
    icon: IoBody,
  },
  {
    id: "6",
    title: "Oncology",
    description:
      "Our oncology care department offers comprehensive care for a wide range of health conditions. Our team of doctors and nurses are dedicated to providing high-quality care to help you feel better.",
    about:
      "Our Oncology department specializes in the diagnosis and treatment of cancer. Our oncologists provide comprehensive care for a wide range of cancer types, from routine screenings to complex treatments. We focus on delivering personalized care, advanced treatment options, and supportive services to help you navigate your cancer journey with confidence.",
    treatments: [
      {
        id: "1",
        title: "Chemotherapy",
        description:
          "Medications to kill cancer cells or stop their growth, often used in combination with other treatments.",
      },
      {
        id: "2",
        title: "Radiation Therapy",
        description:
          "High-energy X-rays or other particles to destroy cancer cells and shrink tumors.",
      },
      {
        id: "3",
        title: "Surgery",
        description:
          "Surgical procedures to remove cancerous tumors and surrounding tissues.",
      },
      {
        id: "4",
        title: "Immunotherapy",
        description:
          "Drugs that help your immune system fight cancer by boosting its ability to recognize and destroy cancer cells.",
      },
      {
        id: "5",
        title: "Targeted Therapy",
        description:
          "Drugs that target specific genes or proteins to block the growth and spread of cancer cells.",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. John Doe",
        title: "Joint Replacement Specialist",
        image: "/doctor1.avif",
      },
      {
        id: "2",
        name: "Dr. Jane Doe",
        title: "Fracture Care Specialist",
        image: "/doctor2.jpg",
      },
      {
        id: "3",
        name: "Dr. John Doe",
        title: "Sports Medicine Specialist",
        image: "/doctor3.avif",
      },
      {
        id: "4",
        name: "Dr. Jane Doe",
        title: "Arthroscopic Surgery Specialist",
        image: "/doctor4.jpeg",
      },
      {
        id: "5",
        name: "Dr. Jane Doe",
        title: "Physical Therapy Specialist",
        image: "/doctor5.webp",
      },
    ],
    image: "/oncology1.jpeg",
    hoverImage: "/oncology2.webp",
    icon: GiCancer,
  },
  {
    id: "7",
    title: "Dental Care",

    description:
      "Our dental care department offers comprehensive care for a wide range of health conditions. Our team of doctors and nurses are dedicated to providing high-quality care to help you feel better.",
    about:
      "Our Dental Care department provides comprehensive oral health services for patients of all ages. Our team of dentists, hygienists, and oral surgeons offer a wide range of treatments to help you achieve a healthy smile. We focus on preventive care, restorative treatments, and cosmetic procedures to address your dental needs and enhance your overall well-being.",
    treatments: [
      {
        id: "1",
        title: "Dental Exams",
        description:
          "Routine check-ups, cleanings, and screenings to maintain your oral health.",
      },
      {
        id: "2",
        title: "Fillings and Crowns",
        description:
          "Restorative treatments to repair cavities, cracked teeth, and other dental issues.",
      },
      {
        id: "3",
        title: "Root Canals",
        description:
          "Treatment for infected or damaged teeth to save them from extraction.",
      },
      {
        id: "4",
        title: "Dental Implants",
        description:
          "Surgical procedures to replace missing teeth with natural-looking implants.",
      },
      {
        id: "5",
        title: "Teeth Whitening",
        description:
          "Cosmetic treatments to brighten your smile and improve your confidence.",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. John Doe",
        title: "Joint Replacement Specialist",
        image: "/doctor1.avif",
      },
      {
        id: "2",
        name: "Dr. Jane Doe",
        title: "Fracture Care Specialist",
        image: "/doctor2.jpg",
      },
      {
        id: "3",
        name: "Dr. John Doe",
        title: "Sports Medicine Specialist",
        image: "/doctor3.avif",
      },
      {
        id: "4",
        name: "Dr. Jane Doe",
        title: "Arthroscopic Surgery Specialist",
        image: "/doctor4.jpeg",
      },
      {
        id: "5",
        name: "Dr. Jane Doe",
        title: "Physical Therapy Specialist",
        image: "/doctor5.webp",
      },
    ],
    image: "/dental1.png",
    hoverImage: "/dental2.webp",
    icon: TbDental,
  },
  {
    id: "8",
    title: "Body Surgery",
    description:
      "Our body surgery department offers advanced care for surgical conditions. Our team of surgeons and nurses are dedicated to providing high-quality care to help you feel better.",
    about:
      "Our Body Surgery department specializes in a wide range of surgical procedures to address various conditions affecting the body. Our team of board-certified surgeons and nurses are committed to delivering personalized care with a focus on safety, quality, and patient satisfaction. We offer a comprehensive range of surgical services, from minimally invasive procedures to complex surgeries, to help you achieve your desired results.",
    treatments: [
      {
        id: "1",
        title: "Breast Augmentation",
        description:
          "Surgical procedures to enhance the size and shape of the breasts.",
      },
      {
        id: "2",
        title: "Liposuction",
        description:
          "Surgical removal of excess fat to contour the body and improve body shape.",
      },
      {
        id: "3",
        title: "Tummy Tuck",
        description:
          "Surgical removal of excess skin and fat from the abdomen to create a flatter, firmer midsection.",
      },
      {
        id: "4",
        title: "Body Lift",
        description:
          "Surgical procedures to remove excess skin and fat from multiple areas of the body, such as the arms, thighs, and buttocks.",
      },
      {
        id: "5",
        title: "Mommy Makeover",
        description: "Combination of surgical procedures to restore",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. John Doe",
        title: "Joint Replacement Specialist",
        image: "/doctor1.avif",
      },
      {
        id: "2",
        name: "Dr. Jane Doe",
        title: "Fracture Care Specialist",
        image: "/doctor2.jpg",
      },
      {
        id: "3",
        name: "Dr. John Doe",
        title: "Sports Medicine Specialist",
        image: "/doctor3.avif",
      },
      {
        id: "4",
        name: "Dr. Jane Doe",
        title: "Arthroscopic Surgery Specialist",
        image: "/doctor4.jpeg",
      },
      {
        id: "5",
        name: "Dr. Jane Doe",
        title: "Physical Therapy Specialist",
        image: "/doctor5.webp",
      },
    ],
    image: "/surgery1.jpeg",
    hoverImage: "/surgery2.jpg",
    icon: IoBodyOutline,
  },
  {
    id: "9",
    title: "Pediatrics",

    description:
      "Our pediatrics department offers comprehensive care for pediatric emergencies. Our team of physicians and nurses are dedicated to providing high-quality care to help you feel better.",
    about:
      "Our Pediatrics department specializes in the care of infants, children, and adolescents. Our pediatricians provide comprehensive medical care for a wide range of pediatric conditions, from routine check-ups to complex medical issues. We focus on promoting healthy growth and development, managing childhood illnesses, and addressing the unique needs of young patients to help them thrive.",
    treatments: [
      {
        id: "1",
        title: "Well-Child Visits",
        description:
          "Routine check-ups, vaccinations, and screenings to monitor your child's growth and development.",
      },
      {
        id: "2",
        title: "Sick Visits",
        description:
          "Diagnosis and treatment of common childhood illnesses, such as colds, flu, and infections.",
      },
      {
        id: "3",
        title: "Developmental Screenings",
        description:
          "Assessment of your child's physical, cognitive, and social development to identify any delays or concerns.",
      },
      {
        id: "4",
        title: "Behavioral Health",
        description:
          "Evaluation and treatment of behavioral and emotional issues, such as ADHD, anxiety, and depression.",
      },
      {
        id: "5",
        title: "Parent Education",
        description:
          "Guidance on child-rearing, nutrition, safety, and other parenting topics to help you raise healthy and happy children.",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. John Doe",
        title: "Joint Replacement Specialist",
        image: "/doctor1.avif",
      },
      {
        id: "2",
        name: "Dr. Jane Doe",
        title: "Fracture Care Specialist",
        image: "/doctor2.jpg",
      },
      {
        id: "3",
        name: "Dr. John Doe",
        title: "Sports Medicine Specialist",
        image: "/doctor3.avif",
      },
      {
        id: "4",
        name: "Dr. Jane Doe",
        title: "Arthroscopic Surgery Specialist",
        image: "/doctor4.jpeg",
      },
      {
        id: "5",
        name: "Dr. Jane Doe",
        title: "Physical Therapy Specialist",
        image: "/doctor5.webp",
      },
    ],
    image: "/pediatrics1.png",
    hoverImage: "/pediatrics.jpeg",
    icon: FaChild,
  },
  {
    id: "11",
    title: "Neurology",
    description:
      "Our neurology department offers advanced care for neurological conditions. Our team of neurosurgeons and nurses are dedicated to providing high-quality care to help you feel better.",
    about:
      "Our Neurology department specializes in the diagnosis and treatment of disorders affecting the brain, spinal cord, and nerves. Our neurologists provide comprehensive care for a wide range of neurological conditions, from routine evaluations to complex treatments. We focus on promoting brain health, managing chronic conditions, and addressing neurological disorders to help you live your best life.",
    treatments: [
      {
        id: "1",
        title: "Neurological Exams",
        description:
          "Comprehensive evaluations to assess brain function, reflexes, and nerve responses.",
      },
      {
        id: "2",
        title: "Brain Imaging",
        description:
          "Diagnostic tests like MRI and CT scans to visualize the brain and identify abnormalities.",
      },
      {
        id: "3",
        title: "Epilepsy Management",
        description:
          "Treatment plans to control seizures and improve quality of life for patients with epilepsy.",
      },
      {
        id: "4",
        title: "Stroke Care",
        description:
          "Emergency treatment and rehabilitation services for patients who have experienced a stroke.",
      },
      {
        id: "5",
        title: "Headache Management",
        description:
          "Evaluation and treatment of chronic headaches, migraines, and other types of head pain.",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. John Doe",
        title: "Joint Replacement Specialist",
        image: "/doctor1.avif",
      },
      {
        id: "2",
        name: "Dr. Jane Doe",
        title: "Fracture Care Specialist",
        image: "/doctor2.jpg",
      },
      {
        id: "3",
        name: "Dr. John Doe",
        title: "Sports Medicine Specialist",
        image: "/doctor3.avif",
      },
      {
        id: "4",
        name: "Dr. Jane Doe",
        title: "Arthroscopic Surgery Specialist",
        image: "/doctor4.jpeg",
      },
      {
        id: "5",
        name: "Dr. Jane Doe",
        title: "Physical Therapy Specialist",
        image: "/doctor5.webp",
      },
    ],
    image: "/neuro1.jpg",
    hoverImage: "/neuro2.jpeg",
    icon: GiBrain,
  },
  {
    id: "12",
    title: "Cardiology",

    description:
      "Our cardiology department offers advanced care for heart conditions. Our team of cardiologists and nurses are dedicated to providing high-quality care to help you feel better.",
    about:
      "Our Cardiology department specializes in the diagnosis and treatment of heart conditions. Our cardiologists provide comprehensive care for a wide range of heart conditions, from routine screenings to complex treatments. We focus on delivering personalized care, advanced treatment options, and supportive services to help you maintain a healthy heart and improve your quality of life.",
    treatments: [
      {
        id: "1",
        title: "Cardiac Exams",
        description:
          "Comprehensive evaluations to assess heart function, blood pressure, and cholesterol levels.",
      },
      {
        id: "2",
        title: "EKG and Stress Tests",
        description:
          "Diagnostic tests to monitor heart activity and identify abnormalities.",
      },
      {
        id: "3",
        title: "Heart Monitoring",
        description:
          "Devices to track heart rhythm and detect irregularities over time.",
      },
      {
        id: "4",
        title: "Heart Catheterization",
        description:
          "Procedure to diagnose and treat heart conditions using a thin tube inserted into a blood vessel.",
      },
      {
        id: "5",
        title: "Cardiac Rehabilitation",
        description:
          "Programs to help you recover from heart surgery or manage chronic heart conditions.",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. John Doe",
        title: "Cardiac Exams Specialist",
        image: "/doctor1.avif",
      },
      {
        id: "2",
        name: "Dr. Jane Doe",
        title: "EKG and Stress Tests Specialist",
        image: "/doctor2.jpg",
      },
      {
        id: "3",
        name: "Dr. John Doe",
        title: "Heart Monitoring Specialist",
        image: "/doctor3.avif",
      },
      {
        id: "4",
        name: "Dr. Jane Doe",
        title: "Heart Catheterization Specialist",
        image: "/doctor4.jpeg",
      },
      {
        id: "5",
        name: "Dr. Jane Doe",
        title: "Cardiac Rehabilitation Specialist",
        image: "/doctor5.webp",
      },
    ],
    image: "/cardiology1.png",
    hoverImage: "/cardiology2.jpg",
    icon: FaHeartPulse,
  },
];
