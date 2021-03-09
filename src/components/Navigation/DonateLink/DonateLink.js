import React from "react";

const DonateLink = () => {
    return (
        <motion.div
            className={styles.menu}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={"menu"}
        >
            <div className={styles.menuContainer}>
                <div className={styles.menuItem}>
                    <div className={styles.imageContainer}>
                        <img
                            src={NavigationMenuData[menuContent].item1.img}
                            alt=""
                        />
                    </div>
                    {NavigationMenuData[menuContent].item1.h1 && (
                        <div className={styles.textContainer}>
                            <h3>{NavigationMenuData[menuContent].item1.h1}</h3>
                            <p>{NavigationMenuData[menuContent].item1.p1}</p>
                            <p>{NavigationMenuData[menuContent].item1.p2}</p>
                        </div>
                    )}
                </div>

                <div className={styles.menuItem}>
                    <div className={styles.imageContainer}>
                        <img
                            src={NavigationMenuData[menuContent].item2.img}
                            alt=""
                        />
                    </div>
                    {NavigationMenuData[menuContent].item2.h1 && (
                        <div className={styles.textContainer}>
                            <h3>{NavigationMenuData[menuContent].item2.h1}</h3>
                            <p>{NavigationMenuData[menuContent].item2.p1}</p>
                            <p>{NavigationMenuData[menuContent].item2.p2}</p>
                        </div>
                    )}
                </div>

                <div className={styles.menuItem}>
                    <div className={styles.imageContainer}>
                        <img
                            src={NavigationMenuData[menuContent].item3.img}
                            alt=""
                        />
                    </div>
                    {NavigationMenuData[menuContent].item3.h1 && (
                        <div className={styles.textContainer}>
                            <h3>{NavigationMenuData[menuContent].item3.h1}</h3>
                            <p>{NavigationMenuData[menuContent].item3.p1}</p>
                            <p>{NavigationMenuData[menuContent].item3.p2}</p>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default DonateLink;
