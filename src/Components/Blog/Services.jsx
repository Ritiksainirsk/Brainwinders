import React, { useState } from "react";

import { FaBookOpen } from "react-icons/fa6";
import { MdOutlineGroups } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const tabs = [
  "Counsellors",
  "Working_Professionals",
  "For_College",
  "Class_11and12",
  "Class_10",
  "Class_8and9",
  "Study_Abroad",
];

const cardData = {
  Counsellors: [
    {
      title: "IDEAL CAREER TEST™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For All Age Groups",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwefE4ndJhqhTihsCr6LokbbXs_-zsMAWTZ-nv-OJ2QN9_ZjZO",
    },
    {
      title: "SKILL BASED TEST FOR 9TH",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For Class 9th",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXCTLoOQ7hAPvCiuV2qaNdrpuKX8UMWq0WhQsHdQZlM7GB27_",
    },
    {
      title: "STREEM SECTOR 10TH",
      questions: "30 Questions",
      time: "30 Minutes",
      price: "₹600",
      oldPrice: "₹2000",
      target: "For Class 10th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXF11StGTu1EMIS2HDxRPWb1zT073qLMo15g9Qy_2q8B4v72MI",
    },
    {
      title: "ENGINEERING SELECTOR",
      questions: "50 Questions",
      time: "40 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For Class 12th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6EijsbyQ-M4eWkAT21Qenqv-inU3zq6sfgtLgW9ICZmTsN8qT",
    },
    {
      title: "HUMANITIES CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹800",
      oldPrice: "₹3000",
      target: "HUMANITIES",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYBTM8YcN63KRSQjBW_O9qMroFcFUk3B_noU4CmM5JOI5sklMq",
    },
    {
      title: "COMMERCE CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "COMMERCE",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWQxphSzBFOZ3sRpLO5O3M706FeHUwhDy_2yQ0qIBUZqQ4FyL",
    },
    {
      title: "PROFESSIONAL SKILL INDEX",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "PROFESSIONAL SKILL",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyjNgVBMrdb7wFYqCQEZ3Sd261TmfujxSZEUOZkbRVwFm2lmAi",
    },
    {
      title: "EDUCATOR PROFESSSIONAL SKILLS",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "EDUCATOR",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlhHjU4-6t6TmrJpEoyF7EPSdp2-GlJET0QEgynVJmPIk2FOXI",
    },
    // Add more cards here
  ],
  Working_Professionals : [
      {
          title: "SKILL BASED TEST FOR 9TH",
          questions: "40 Questions",
          time: "30 Minutes",
          price: "₹500",
          oldPrice: "₹2000",
          target: "For Class 9th",
          image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXCTLoOQ7hAPvCiuV2qaNdrpuKX8UMWq0WhQsHdQZlM7GB27_",
        },
        {
          title: "IDEAL CAREER TEST™",
          questions: "180 Questions",
          time: "60 Minutes",
          price: "₹500",
          oldPrice: "₹2000",
          target: "For All Age Groups",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwefE4ndJhqhTihsCr6LokbbXs_-zsMAWTZ-nv-OJ2QN9_ZjZO",
        },
    {
      title: "STREEM SECTOR 10TH",
      questions: "30 Questions",
      time: "30 Minutes",
      price: "₹600",
      oldPrice: "₹2000",
      target: "For Class 10th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXF11StGTu1EMIS2HDxRPWb1zT073qLMo15g9Qy_2q8B4v72MI",
    },
    {
        title: "HUMANITIES CAREER SELECTOR",
        questions: "40 Questions",
        time: "30 Minutes",
        price: "₹800",
        oldPrice: "₹3000",
        target: "HUMANITIES",
        image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYBTM8YcN63KRSQjBW_O9qMroFcFUk3B_noU4CmM5JOI5sklMq",
    },
    {
      title: "ENGINEERING SELECTOR",
      questions: "50 Questions",
      time: "40 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For Class 12th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6EijsbyQ-M4eWkAT21Qenqv-inU3zq6sfgtLgW9ICZmTsN8qT",
    },
    {
      title: "COMMERCE CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "COMMERCE",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWQxphSzBFOZ3sRpLO5O3M706FeHUwhDy_2yQ0qIBUZqQ4FyL",
    },
    {
        title: "EDUCATOR PROFESSSIONAL SKILLS",
        questions: "20 Questions",
        time: "40 Minutes",
        price: "₹200",
        oldPrice: "₹2000",
        target: "EDUCATOR",
        image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlhHjU4-6t6TmrJpEoyF7EPSdp2-GlJET0QEgynVJmPIk2FOXI",
    },
    // Add more cards here
    {
      title: "PROFESSIONAL SKILL INDEX",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "PROFESSIONAL SKILL",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyjNgVBMrdb7wFYqCQEZ3Sd261TmfujxSZEUOZkbRVwFm2lmAi",
    },
  ],
  For_College : [
    {
      title: "IDEAL CAREER TEST™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For All Age Groups",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwefE4ndJhqhTihsCr6LokbbXs_-zsMAWTZ-nv-OJ2QN9_ZjZO",
    },
    {
        title: "STREEM SECTOR 10TH",
        questions: "30 Questions",
        time: "30 Minutes",
        price: "₹600",
        oldPrice: "₹2000",
        target: "For Class 10th",
        image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXF11StGTu1EMIS2HDxRPWb1zT073qLMo15g9Qy_2q8B4v72MI",
    },
    {
      title: "SKILL BASED TEST FOR 9TH",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For Class 9th",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXCTLoOQ7hAPvCiuV2qaNdrpuKX8UMWq0WhQsHdQZlM7GB27_",
    },
    {
      title: "ENGINEERING SELECTOR",
      questions: "50 Questions",
      time: "40 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For Class 12th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6EijsbyQ-M4eWkAT21Qenqv-inU3zq6sfgtLgW9ICZmTsN8qT",
    },
    {
        title: "COMMERCE CAREER SELECTOR",
        questions: "40 Questions",
        time: "30 Minutes",
        price: "₹500",
        oldPrice: "₹2000",
        target: "COMMERCE",
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWQxphSzBFOZ3sRpLO5O3M706FeHUwhDy_2yQ0qIBUZqQ4FyL",
    },
    {
      title: "HUMANITIES CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹800",
      oldPrice: "₹3000",
      target: "HUMANITIES",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYBTM8YcN63KRSQjBW_O9qMroFcFUk3B_noU4CmM5JOI5sklMq",
    },
    {
      title: "PROFESSIONAL SKILL INDEX",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "PROFESSIONAL SKILL",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyjNgVBMrdb7wFYqCQEZ3Sd261TmfujxSZEUOZkbRVwFm2lmAi",
    },
    {
      title: "EDUCATOR PROFESSSIONAL SKILLS",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "EDUCATOR",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlhHjU4-6t6TmrJpEoyF7EPSdp2-GlJET0QEgynVJmPIk2FOXI",
    },
    // Add more cards here
  ],
  Class_11and12 : [
    {
      title: "IDEAL CAREER TEST™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For All Age Groups",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwefE4ndJhqhTihsCr6LokbbXs_-zsMAWTZ-nv-OJ2QN9_ZjZO",
    },
    {
      title: "SKILL BASED TEST FOR 9TH",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For Class 9th",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXCTLoOQ7hAPvCiuV2qaNdrpuKX8UMWq0WhQsHdQZlM7GB27_",
    },
    {
      title: "STREEM SECTOR 10TH",
      questions: "30 Questions",
      time: "30 Minutes",
      price: "₹600",
      oldPrice: "₹2000",
      target: "For Class 10th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXF11StGTu1EMIS2HDxRPWb1zT073qLMo15g9Qy_2q8B4v72MI",
    },
    {
      title: "ENGINEERING SELECTOR",
      questions: "50 Questions",
      time: "40 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For Class 12th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6EijsbyQ-M4eWkAT21Qenqv-inU3zq6sfgtLgW9ICZmTsN8qT",
    },
    {
      title: "HUMANITIES CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹800",
      oldPrice: "₹3000",
      target: "HUMANITIES",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYBTM8YcN63KRSQjBW_O9qMroFcFUk3B_noU4CmM5JOI5sklMq",
    },
    {
      title: "COMMERCE CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "COMMERCE",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWQxphSzBFOZ3sRpLO5O3M706FeHUwhDy_2yQ0qIBUZqQ4FyL",
    },
    {
      title: "PROFESSIONAL SKILL INDEX",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "PROFESSIONAL SKILL",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyjNgVBMrdb7wFYqCQEZ3Sd261TmfujxSZEUOZkbRVwFm2lmAi",
    },
    {
      title: "EDUCATOR PROFESSSIONAL SKILLS",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "EDUCATOR",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlhHjU4-6t6TmrJpEoyF7EPSdp2-GlJET0QEgynVJmPIk2FOXI",
    },
    // Add more cards here
  ],
  Class_10: [
      {
        title: "SKILL BASED TEST FOR 9TH",
        questions: "40 Questions",
        time: "30 Minutes",
        price: "₹500",
        oldPrice: "₹2000",
        target: "For Class 9th",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXCTLoOQ7hAPvCiuV2qaNdrpuKX8UMWq0WhQsHdQZlM7GB27_",
      },
    {
      title: "IDEAL CAREER TEST™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For All Age Groups",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwefE4ndJhqhTihsCr6LokbbXs_-zsMAWTZ-nv-OJ2QN9_ZjZO",
    },
    {
      title: "ENGINEERING SELECTOR",
      questions: "50 Questions",
      time: "40 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For Class 12th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6EijsbyQ-M4eWkAT21Qenqv-inU3zq6sfgtLgW9ICZmTsN8qT",
    },
    {
      title: "STREEM SECTOR 10TH",
      questions: "30 Questions",
      time: "30 Minutes",
      price: "₹600",
      oldPrice: "₹2000",
      target: "For Class 10th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXF11StGTu1EMIS2HDxRPWb1zT073qLMo15g9Qy_2q8B4v72MI",
    },
    {
      title: "HUMANITIES CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹800",
      oldPrice: "₹3000",
      target: "HUMANITIES",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYBTM8YcN63KRSQjBW_O9qMroFcFUk3B_noU4CmM5JOI5sklMq",
    },
    {
        title: "PROFESSIONAL SKILL INDEX",
        questions: "20 Questions",
        time: "40 Minutes",
        price: "₹200",
        oldPrice: "₹2000",
        target: "PROFESSIONAL SKILL",
        image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyjNgVBMrdb7wFYqCQEZ3Sd261TmfujxSZEUOZkbRVwFm2lmAi",
    },
    {
      title: "COMMERCE CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "COMMERCE",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWQxphSzBFOZ3sRpLO5O3M706FeHUwhDy_2yQ0qIBUZqQ4FyL",
    },
    {
      title: "EDUCATOR PROFESSSIONAL SKILLS",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "EDUCATOR",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlhHjU4-6t6TmrJpEoyF7EPSdp2-GlJET0QEgynVJmPIk2FOXI",
    },
    // Add more cards here
  ],
  Class_8and9: [
    {
      title: "IDEAL CAREER TEST™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For All Age Groups",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwefE4ndJhqhTihsCr6LokbbXs_-zsMAWTZ-nv-OJ2QN9_ZjZO",
    },
    {
      title: "SKILL BASED TEST FOR 9TH",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For Class 9th",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXCTLoOQ7hAPvCiuV2qaNdrpuKX8UMWq0WhQsHdQZlM7GB27_",
    },
    {
      title: "STREEM SECTOR 10TH",
      questions: "30 Questions",
      time: "30 Minutes",
      price: "₹600",
      oldPrice: "₹2000",
      target: "For Class 10th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXF11StGTu1EMIS2HDxRPWb1zT073qLMo15g9Qy_2q8B4v72MI",
    },
    {
      title: "ENGINEERING SELECTOR",
      questions: "50 Questions",
      time: "40 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For Class 12th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6EijsbyQ-M4eWkAT21Qenqv-inU3zq6sfgtLgW9ICZmTsN8qT",
    },
    {
      title: "HUMANITIES CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹800",
      oldPrice: "₹3000",
      target: "HUMANITIES",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYBTM8YcN63KRSQjBW_O9qMroFcFUk3B_noU4CmM5JOI5sklMq",
    },
    {
      title: "COMMERCE CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "COMMERCE",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWQxphSzBFOZ3sRpLO5O3M706FeHUwhDy_2yQ0qIBUZqQ4FyL",
    },
    {
      title: "PROFESSIONAL SKILL INDEX",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "PROFESSIONAL SKILL",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyjNgVBMrdb7wFYqCQEZ3Sd261TmfujxSZEUOZkbRVwFm2lmAi",
    },
    {
      title: "EDUCATOR PROFESSSIONAL SKILLS",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "EDUCATOR",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlhHjU4-6t6TmrJpEoyF7EPSdp2-GlJET0QEgynVJmPIk2FOXI",
    },
    // Add more cards here
  ],
  Study_Abroad: [
    {
      title: "IDEAL CAREER TEST™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For All Age Groups",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwefE4ndJhqhTihsCr6LokbbXs_-zsMAWTZ-nv-OJ2QN9_ZjZO",
    },
    {
      title: "SKILL BASED TEST FOR 9TH",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For Class 9th",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXCTLoOQ7hAPvCiuV2qaNdrpuKX8UMWq0WhQsHdQZlM7GB27_",
    },
    {
        title: "ENGINEERING SELECTOR",
        questions: "50 Questions",
        time: "40 Minutes",
        price: "₹500",
        oldPrice: "₹2000",
        target: "For Class 12th",
        image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6EijsbyQ-M4eWkAT21Qenqv-inU3zq6sfgtLgW9ICZmTsN8qT",
    },
    {
      title: "STREEM SECTOR 10TH",
      questions: "30 Questions",
      time: "30 Minutes",
      price: "₹600",
      oldPrice: "₹2000",
      target: "For Class 10th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXF11StGTu1EMIS2HDxRPWb1zT073qLMo15g9Qy_2q8B4v72MI",
    },
    {
      title: "HUMANITIES CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹800",
      oldPrice: "₹3000",
      target: "HUMANITIES",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYBTM8YcN63KRSQjBW_O9qMroFcFUk3B_noU4CmM5JOI5sklMq",
    },
    {
        title: "PROFESSIONAL SKILL INDEX",
        questions: "20 Questions",
        time: "40 Minutes",
        price: "₹200",
        oldPrice: "₹2000",
        target: "PROFESSIONAL SKILL",
        image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyjNgVBMrdb7wFYqCQEZ3Sd261TmfujxSZEUOZkbRVwFm2lmAi",
    },
    {
      title: "COMMERCE CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "COMMERCE",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWQxphSzBFOZ3sRpLO5O3M706FeHUwhDy_2yQ0qIBUZqQ4FyL",
    },
    {
      title: "EDUCATOR PROFESSSIONAL SKILLS",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "EDUCATOR",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlhHjU4-6t6TmrJpEoyF7EPSdp2-GlJET0QEgynVJmPIk2FOXI",
    },
    // Add more cards here
  ],
  
};

export default function Services() {
  return (
    <div>
      <div>
        <CareerServices />
      </div>
      <Banner/>
    </div>
  );
}

function CareerServices() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="p-4 px-9">
      <h1 className="text-2xl font-bold text-center mb-4">
        Our Career Services
      </h1>
      <div className="flex justify-center flex-wrap space-x-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded ${
              activeTab === tab ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cardData[activeTab]?.map((card, index) => (
          <div
            key={index}
            className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-48 "
              src={card.image}
              alt={card.title}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{card.title}</h3>
              <span className="flex items-center gap-3">
                <FaBookOpen />
                <p className="text-gray-600">{card.questions}</p>
              </span>
              <span className="flex items-center gap-3">
                <MdOutlineGroups />
                <p className="text-gray-600">{card.time}</p>
              </span>
              <span className="flex items-center gap-3">
                <FaRupeeSign />{" "}
                <div className="flex items-center">
                  <span className="line-through text-gray-500">
                    {card.oldPrice}
                  </span>
                  <span className="text-red-500 ml-2">{card.price}</span>
                </div>
              </span>
              <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded">
                {card.target}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


const Banner = () => {
    return (
      <div className="w-full bg-[#022F46] text-white p-6 shadow-lg flex flex-col md:flex-row items-center justify-between my-14">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold">
            Not sure if career counselling is right for you?
          </h2>
          <p className="mt-2">
            Book a career Brainstrom session to explore your options with a counseller before opting for the full career guidance solution.
          </p>
          <button className="px-4 py-1 text-white bg-blue-800 rounded-3xl mt-4">Know More</button>
        </div>
        <div className="md:w-64 mt-4 md:mt-0 flex justify-center">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxl4R3aaj5CgUQKEtov-N38RgwqaSTLKKRebeqA5dGU2ek0uub"
            alt="Career Clarity"
            className="w-full md:w-auto rounded-full"
          />
        </div>
      </div>
    );
  };

