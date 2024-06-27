import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from './breadCrumbs.module.css'
export default function BreadCrumbs({ links }) {
    return (
        <div className={styles.container}>
            <Breadcrumb>
                {links.map((item, index) => (
                    <Breadcrumb.Item
                        active={item.active}
                        key={index}
                        href={`${item.link}`}
                    >
                        {item.text}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </div>
    )
}
