import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

const pathColor = '#000000';
const shapeColor = '#000000';

const mainPathVariant = {
  transition: {
    duration: 4,
    ease: 'easeInOut',
  },
  variants: {
    visible: {
      pathLength: 1,
      stroke: pathColor,
      strokeWidth: 8,
    },
    hidden: {
      pathLength: 0,
      strokeWidth: 10,
    },
  },
};

const shapeVariations = {
  transition: {
    delay: 6,
    duration: 3,
    ease: 'easeIn',
  },
  variants: {
    visible: {
      fillOpacity: 1,
      pathLength: 1,
      transition: {
        delay: 3,
        duration: 3,
      },
    },
    hidden: {
      fillOpacity: 0,
      pathLength: 0,
    },
  },
};

export default function SplashScreen() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center transform ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200.000000pt"
          height="200.000000pt"
          viewBox="0 0 500.000000 500.000000"
          className="brightness-200"
        >
          <g
            id="Group_1"
            data-name="Group 1"
            transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_1.5"
              data-name="Path 1"
              d="M2687 4464 c-16 -5 -18 -14 -13 -82 10 -140 17 -362 12 -362 -2 0
              -37 99 -77 220 l-73 220 -58 0 c-52 0 -62 -4 -94 -33 -30 -27 -37 -42 -41 -82
              -3 -28 -26 -96 -53 -155 -40 -88 -47 -112 -43 -150 4 -39 0 -51 -26 -84 -36
              -45 -38 -60 -11 -79 16 -11 19 -23 16 -63 -2 -27 -7 -57 -11 -67 -4 -10 -2
              -23 5 -32 7 -8 9 -30 5 -57 -3 -24 -2 -48 2 -54 24 -33 111 -45 182 -24 19 5
              37 8 39 5 2 -2 -8 -57 -23 -122 -67 -294 -236 -1096 -232 -1106 2 -6 52 73
              112 174 346 587 356 601 443 696 84 92 122 114 122 73 0 -11 9 -47 21 -81 l21
              -60 -32 -97 c-26 -77 -31 -107 -27 -147 6 -46 82 -313 93 -325 5 -4 51 45 161
              169 l30 34 74 -77 c107 -114 299 -269 567 -459 l122 -87 313 -106 c171 -58
              374 -126 451 -152 l138 -47 30 -53 c23 -41 44 -60 92 -88 33 -20 64 -41 68
              -48 4 -6 8 43 8 109 l0 120 -59 52 c-34 30 -115 82 -188 121 -70 38 -265 143
              -433 232 l-305 164 -216 173 c-184 148 -222 183 -264 245 -61 89 -201 233
              -273 278 -46 29 -52 37 -48 59 12 55 56 414 70 561 11 112 13 174 6 225 -30
              215 -129 362 -289 426 -45 17 -80 22 -176 25 -66 1 -128 0 -138 -2z"
              fill="none"
              strokeMiterlimit="10"
            />
            <motion.path
              id="Path_1"
              data-name="Path 1.5"
              d="M2687 4464 c-16 -5 -18 -14 -13 -82 10 -140 17 -362 12 -362 -2 0
              -37 99 -77 220 l-73 220 -58 0 c-52 0 -62 -4 -94 -33 -30 -27 -37 -42 -41 -82
              -3 -28 -26 -96 -53 -155 -40 -88 -47 -112 -43 -150 4 -39 0 -51 -26 -84 -36
              -45 -38 -60 -11 -79 16 -11 19 -23 16 -63 -2 -27 -7 -57 -11 -67 -4 -10 -2
              -23 5 -32 7 -8 9 -30 5 -57 -3 -24 -2 -48 2 -54 24 -33 111 -45 182 -24 19 5
              37 8 39 5 2 -2 -8 -57 -23 -122 -67 -294 -236 -1096 -232 -1106 2 -6 52 73
              112 174 346 587 356 601 443 696 84 92 122 114 122 73 0 -11 9 -47 21 -81 l21
              -60 -32 -97 c-26 -77 -31 -107 -27 -147 6 -46 82 -313 93 -325 5 -4 51 45 161
              169 l30 34 74 -77 c107 -114 299 -269 567 -459 l122 -87 313 -106 c171 -58
              374 -126 451 -152 l138 -47 30 -53 c23 -41 44 -60 92 -88 33 -20 64 -41 68
              -48 4 -6 8 43 8 109 l0 120 -59 52 c-34 30 -115 82 -188 121 -70 38 -265 143
              -433 232 l-305 164 -216 173 c-184 148 -222 183 -264 245 -61 89 -201 233
              -273 278 -46 29 -52 37 -48 59 12 55 56 414 70 561 11 112 13 174 6 225 -30
              215 -129 362 -289 426 -45 17 -80 22 -176 25 -66 1 -128 0 -138 -2z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_2"
              data-name="Path 2"
              d="M0 4351 l0 -108 60 -7 c33 -3 87 -9 120 -12 l60 -7 365 -319 364
              -319 468 -270 c257 -149 471 -273 474 -275 3 -2 27 27 52 65 45 65 146 169
              217 223 19 14 33 28 30 30 -3 3 -77 34 -165 71 -161 66 -238 90 -330 102 -48
              7 -101 32 -425 203 -58 30 -298 184 -535 342 l-430 287 -153 51 c-84 29 -157
              52 -163 52 -5 0 -9 -47 -9 -109z"
              fill="none"
              strokeMiterlimit="10"
            />
            <motion.path
              id="Path_1"
              data-name="Path 1"
              d="M0 4351 l0 -108 60 -7 c33 -3 87 -9 120 -12 l60 -7 365 -319 364
              -319 468 -270 c257 -149 471 -273 474 -275 3 -2 27 27 52 65 45 65 146 169
              217 223 19 14 33 28 30 30 -3 3 -77 34 -165 71 -161 66 -238 90 -330 102 -48
              7 -101 32 -425 203 -58 30 -298 184 -535 342 l-430 287 -153 51 c-84 29 -157
              52 -163 52 -5 0 -9 -47 -9 -109z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_3"
              data-name="Path 3"
              d="M2665 2024 c-184 -53 -286 -67 -515 -70 l-205 -1 -6 -54 c-12 -106
              -69 -174 -271 -321 -80 -59 -141 -116 -247 -232 -215 -236 -302 -308 -432
              -358 -32 -13 -59 -26 -59 -30 0 -4 19 -18 43 -30 60 -31 158 -29 253 6 85 31
              115 33 138 7 30 -33 18 -82 -26 -110 -21 -13 -36 -26 -34 -29 9 -9 144 42 236
              89 153 78 308 214 396 348 l29 45 6 -30 c16 -73 9 -125 -26 -201 -19 -42 -35
              -81 -35 -86 0 -6 18 6 40 28 22 21 41 37 43 34 2 -2 16 -62 31 -134 33 -154
              86 -341 127 -445 30 -78 87 -185 95 -178 2 3 17 129 33 281 25 245 40 322 58
              304 3 -3 -33 -378 -54 -556 l-6 -53 209 7 209 7 103 101 c110 109 164 188 247
              359 l47 96 31 -9 c18 -5 40 -9 49 -9 15 0 16 3 3 34 -20 47 -4 101 38 127 36
              22 54 21 162 -10 69 -19 205 -28 252 -15 l22 6 -27 40 c-39 59 -43 147 -9 214
              30 59 48 76 107 103 39 18 66 21 205 21 140 0 337 19 352 33 2 3 -19 23 -49
              45 -159 119 -415 216 -789 296 -90 19 -189 44 -219 54 -140 48 -277 137 -371
              240 -28 31 -57 60 -63 63 -6 3 -60 -9 -121 -27z m-570 -514 c-9 -55 -28 -136
              -43 -180 l-28 -81 -23 25 -24 26 30 57 c32 61 92 228 94 260 0 11 3 13 6 5 3
              -7 -2 -58 -12 -112z m165 -315 c45 -23 61 -64 58 -145 l-3 -69 -105 98 -105
              98 30 16 c38 21 88 21 125 2z"
              fill="none"
              strokeMiterlimit="10"
            />
            <motion.path
              id="Path_3"
              data-name="Path 3"
              d="M2665 2024 c-184 -53 -286 -67 -515 -70 l-205 -1 -6 -54 c-12 -106
-69 -174 -271 -321 -80 -59 -141 -116 -247 -232 -215 -236 -302 -308 -432
-358 -32 -13 -59 -26 -59 -30 0 -4 19 -18 43 -30 60 -31 158 -29 253 6 85 31
115 33 138 7 30 -33 18 -82 -26 -110 -21 -13 -36 -26 -34 -29 9 -9 144 42 236
89 153 78 308 214 396 348 l29 45 6 -30 c16 -73 9 -125 -26 -201 -19 -42 -35
-81 -35 -86 0 -6 18 6 40 28 22 21 41 37 43 34 2 -2 16 -62 31 -134 33 -154
86 -341 127 -445 30 -78 87 -185 95 -178 2 3 17 129 33 281 25 245 40 322 58
304 3 -3 -33 -378 -54 -556 l-6 -53 209 7 209 7 103 101 c110 109 164 188 247
359 l47 96 31 -9 c18 -5 40 -9 49 -9 15 0 16 3 3 34 -20 47 -4 101 38 127 36
22 54 21 162 -10 69 -19 205 -28 252 -15 l22 6 -27 40 c-39 59 -43 147 -9 214
30 59 48 76 107 103 39 18 66 21 205 21 140 0 337 19 352 33 2 3 -19 23 -49
45 -159 119 -415 216 -789 296 -90 19 -189 44 -219 54 -140 48 -277 137 -371
240 -28 31 -57 60 -63 63 -6 3 -60 -9 -121 -27z m-570 -514 c-9 -55 -28 -136
-43 -180 l-28 -81 -23 25 -24 26 30 57 c32 61 92 228 94 260 0 11 3 13 6 5 3
-7 -2 -58 -12 -112z m165 -315 c45 -23 61 -64 58 -145 l-3 -69 -105 98 -105
98 30 16 c38 21 88 21 125 2z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_4"
              data-name="Path 4"
              d="M2810 335 l-74 -75 64 0 c36 0 75 3 88 6 21 6 22 10 16 53 -15 100
-11 100 -94 16z"
              fill="none"
              strokeMiterlimit="10"
            />
            <motion.path
              id="Path_4"
              data-name="Path 4"
              d="M2810 335 l-74 -75 64 0 c36 0 75 3 88 6 21 6 22 10 16 53 -15 100
-11 100 -94 16z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            {/*
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_5"
              data-name="Path 5"
              d="M1650 2120 l0 -1070 200 0 c114 0 200 4 200 9 0 5 -22 25 -49 45 -97
              71 -185 215 -186 305 0 42 1 44 40 58 22 8 75 17 118 20 l78 6 -3 461 -3 461
              -60 388 -59 387 -138 0 -138 0 0 -1070z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_5"
              data-name="Path 5"
              d="M1650 2120 l0 -1070 200 0 c114 0 200 4 200 9 0 5 -22 25 -49 45 -97
              71 -185 215 -186 305 0 42 1 44 40 58 22 8 75 17 118 20 l78 6 -3 461 -3 461
              -60 388 -59 387 -138 0 -138 0 0 -1070z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_6"
              data-name="Path 6"
              d="M1950 3175 c0 -28 90 -607 96 -616 5 -8 144 -810 144 -831 0 -3 30
              -21 68 -39 37 -18 69 -35 73 -36 3 -2 15 15 28 37 27 49 119 150 136 150 16 0
              105 -95 135 -145 13 -22 25 -42 26 -44 2 -2 31 11 65 28 34 17 68 31 75 31 7
              0 16 15 19 33 12 65 137 830 180 1102 24 154 47 295 50 313 l6 32 -184 0 -185
              0 -6 -32 c-3 -18 -42 -298 -86 -623 -44 -324 -83 -603 -87 -619 -6 -19 -35
              172 -96 615 -48 354 -88 647 -87 652 0 4 -83 7 -185 7 -158 0 -185 -2 -185
              -15z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_6"
              data-name="Path 6"
              d="M1950 3175 c0 -28 90 -607 96 -616 5 -8 144 -810 144 -831 0 -3 30
              -21 68 -39 37 -18 69 -35 73 -36 3 -2 15 15 28 37 27 49 119 150 136 150 16 0
              105 -95 135 -145 13 -22 25 -42 26 -44 2 -2 31 11 65 28 34 17 68 31 75 31 7
              0 16 15 19 33 12 65 137 830 180 1102 24 154 47 295 50 313 l6 32 -184 0 -185
              0 -6 -32 c-3 -18 -42 -298 -86 -623 -44 -324 -83 -603 -87 -619 -6 -19 -35
              172 -96 615 -48 354 -88 647 -87 652 0 4 -83 7 -185 7 -158 0 -185 -2 -185
              -15z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_7"
              data-name="Path 7"
              d="M3065 3158 c-3 -18 -30 -196 -60 -396 l-55 -362 0 -460 0 -460 48 -1
c26 0 76 -8 112 -17 l65 -17 -2 -45 c-4 -77 -71 -197 -153 -273 -39 -36 -70
-68 -70 -71 0 -3 90 -6 200 -6 l200 0 0 1070 0 1070 -140 0 -139 0 -6 -32z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_7"
              data-name="Path 7"
              d="M3065 3158 c-3 -18 -30 -196 -60 -396 l-55 -362 0 -460 0 -460 48 -1
c26 0 76 -8 112 -17 l65 -17 -2 -45 c-4 -77 -71 -197 -153 -273 -39 -36 -70
-68 -70 -71 0 -3 90 -6 200 -6 l200 0 0 1070 0 1070 -140 0 -139 0 -6 -32z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_8"
              data-name="Path 8"
              d="M2440 1763 c-23 -27 -52 -67 -63 -91 l-21 -42 41 -43 c23 -23 54 -63
70 -89 l30 -47 41 64 c23 35 55 74 71 88 l30 25 -23 41 c-28 54 -103 141 -121
141 -7 0 -32 -21 -55 -47z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_8"
              data-name="Path 8"
              d="M2440 1763 c-23 -27 -52 -67 -63 -91 l-21 -42 41 -43 c23 -23 54 -63
70 -89 l30 -47 41 64 c23 35 55 74 71 88 l30 25 -23 41 c-28 54 -103 141 -121
141 -7 0 -32 -21 -55 -47z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_9"
              data-name="Path 9"
              d="M2200 1684 c0 -4 9 -61 20 -128 17 -98 25 -125 43 -140 l22 -18 7 73
              c5 41 14 93 22 116 l15 42 -53 31 c-52 29 -76 37 -76 24z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_9"
              data-name="Path 9"
              d="M2200 1684 c0 -4 9 -61 20 -128 17 -98 25 -125 43 -140 l22 -18 7 73
              c5 41 14 93 22 116 l15 42 -53 31 c-52 29 -76 37 -76 24z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_10"
              data-name="Path 10"
              d="M2745 1671 c-77 -36 -78 -38 -61 -111 9 -36 16 -88 16 -117 l0 -52
33 19 c32 19 34 23 51 132 9 62 19 121 22 131 7 22 -10 22 -61 -2z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_10"
              data-name="Path 10"
              d="M2745 1671 c-77 -36 -78 -38 -61 -111 9 -36 16 -88 16 -117 l0 -52
33 19 c32 19 34 23 51 132 9 62 19 121 22 131 7 22 -10 22 -61 -2z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_11"
              data-name="Path 11"
              d="M2331 1566 c-6 -25 -11 -78 -11 -119 0 -69 2 -75 31 -103 17 -16 46
              -51 65 -79 31 -46 34 -48 34 -23 0 15 7 63 16 107 l16 80 -27 49 c-15 27 -46
              69 -70 92 l-42 41 -12 -45z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_11"
              data-name="Path 11"
              d="M2331 1566 c-6 -25 -11 -78 -11 -119 0 -69 2 -75 31 -103 17 -16 46
              -51 65 -79 31 -46 34 -48 34 -23 0 15 7 63 16 107 l16 80 -27 49 c-15 27 -46
              69 -70 92 l-42 41 -12 -45z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_12"
              data-name="Path 12"
              d="M2604 1568 c-23 -24 -54 -66 -69 -92 -27 -45 -27 -50 -16 -99 7 -29
              16 -77 20 -107 l7 -55 16 31 c10 17 38 53 64 80 l47 48 -1 76 c0 41 -7 95 -14
              119 l-13 43 -41 -44z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_12"
              data-name="Path 12"
              d="M2604 1568 c-23 -24 -54 -66 -69 -92 -27 -45 -27 -50 -16 -99 7 -29
              16 -77 20 -107 l7 -55 16 31 c10 17 38 53 64 80 l47 48 -1 76 c0 41 -7 95 -14
              119 l-13 43 -41 -44z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_13"
              data-name="Path 13"
              d="M1925 1465 c-5 -2 -30 -9 -54 -15 -43 -11 -43 -12 -38 -49 12 -89
111 -241 186 -284 l31 -18 -2 183 -3 183 -55 2 c-30 1 -59 0 -65 -2z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_13"
              data-name="Path 13"
              d="M1925 1465 c-5 -2 -30 -9 -54 -15 -43 -11 -43 -12 -38 -49 12 -89
111 -241 186 -284 l31 -18 -2 183 -3 183 -55 2 c-30 1 -59 0 -65 -2z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_14"
              data-name="Path 14"
              d="M2950 1281 c0 -111 4 -181 10 -181 5 0 34 25 65 56 57 59 119 170
              130 235 6 35 6 36 -37 48 -24 8 -71 16 -105 19 l-63 5 0 -182z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_14"
              data-name="Path 14"
              d="M2950 1281 c0 -111 4 -181 10 -181 5 0 34 25 65 56 57 59 119 170
              130 235 6 35 6 36 -37 48 -24 8 -71 16 -105 19 l-63 5 0 -182z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_15"
              data-name="Path 15"
              d="M2250 1389 c0 -37 41 -243 50 -254 10 -13 81 -45 129 -60 22 -7 20
-2 -16 41 -50 60 -81 121 -103 198 -10 37 -25 65 -38 74 -18 12 -22 12 -22 1z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_15"
              data-name="Path 15"
              d="M2250 1389 c0 -37 41 -243 50 -254 10 -13 81 -45 129 -60 22 -7 20
-2 -16 41 -50 60 -81 121 -103 198 -10 37 -25 65 -38 74 -18 12 -22 12 -22 1z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_16"
              data-name="Path 16"
              d="M2721 1381 c-15 -11 -32 -45 -46 -90 -25 -78 -54 -128 -113 -193 -34
-38 -35 -40 -12 -34 28 9 138 60 158 73 9 7 51 209 52 256 0 12 -13 8 -39 -12z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_16"
              data-name="Path 16"
              d="M2721 1381 c-15 -11 -32 -45 -46 -90 -25 -78 -54 -128 -113 -193 -34
-38 -35 -40 -12 -34 28 9 138 60 158 73 9 7 51 209 52 256 0 12 -13 8 -39 -12z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_17"
              data-name="Path 17"
              d="M2480 1324 c-13 -62 -8 -181 9 -211 8 -14 11 -11 18 22 11 55 9 207
              -4 230 -9 16 -13 10 -23 -41z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_17"
              data-name="Path 17"
              d="M2480 1324 c-13 -62 -8 -181 9 -211 8 -14 11 -11 18 22 11 55 9 207
              -4 230 -9 16 -13 10 -23 -41z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_18"
              data-name="Path 18"
              d="M2330 1328 c1 -46 106 -228 132 -228 14 0 -35 114 -73 172 -41 60 -59 77 -59 56z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_18"
              data-name="Path 18"
              d="M2330 1328 c1 -46 106 -228 132 -228 14 0 -35 114 -73 172 -41 60 -59 77 -59 56z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_19"
              data-name="Path 19"
              d="M2622 1295 c-37 -46 -87 -138 -96 -180 l-7 -30 36 40 c40 45 109 177
103 196 -2 7 -17 -4 -36 -26z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_19"
              data-name="Path 19"
              d="M2622 1295 c-37 -46 -87 -138 -96 -180 l-7 -30 36 40 c40 45 109 177
103 196 -2 7 -17 -4 -36 -26z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_20"
              data-name="Path 20"
              d="M2302 1083 c3 -27 5 -28 68 -30 65 -2 65 -2 29 11 -20 8 -50 21 -68
31 l-32 16 3 -28z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_20"
              data-name="Path 20"
              d="M2302 1083 c3 -27 5 -28 68 -30 65 -2 65 -2 29 11 -20 8 -50 21 -68
31 l-32 16 3 -28z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />

            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_21"
              data-name="Path 21"
              d="M2635 1079 l-60 -29 68 0 67 0 0 30 c0 17 -3 30 -7 29 -5 0 -35 -14
              -68 -30z"
              fill="none"
              //   stroke={pathColor}
              strokeMiterlimit="10"
              //   stroke-width="6"
            />
            <motion.path
              id="Path_21"
              data-name="Path 21"
              d="M2635 1079 l-60 -29 68 0 67 0 0 30 c0 17 -3 30 -7 29 -5 0 -35 -14
              -68 -30z"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            /> */}
          </g>
        </svg>
      </div>
    </>
  );
}
