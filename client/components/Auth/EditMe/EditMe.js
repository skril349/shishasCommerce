import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import ChangeNameForm from "../../Account/ChangeNameForm";
import ChangeEmailForm from "../../Account/ChangeEmailForm/ChangeEmailForm";
import ChangePasswordForm from "../../Account/ChangePasswordForm";
import { Icon } from "semantic-ui-react";
import BasicModal from "../../Modal/BasicModal";
import AddressForm from "../../Account/AddressForm/AddressForm";
export default function EditMe(props) {
  const { user, setReloadUser } = props;
  return (
    <Layout>
      <div fluid className="edit-me">
        <Configuration user={user} setReloadUser={setReloadUser} />
        <Addresses />
      </div>
    </Layout>
  );
}

function Configuration(props) {
  const { user, setReloadUser } = props;
  if (!user) return null;
  return (
    <div className="edit-me__configuration">
      <div className="title">Configuración:</div>
      <div className="data">
        <ChangeNameForm user={user} setReloadUser={setReloadUser} />
        <ChangeEmailForm user={user} setReloadUser={setReloadUser} />
        <ChangePasswordForm user={user} setReloadUser={setReloadUser} />
      </div>
    </div>
  );
}

function Addresses() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [formModal, setFormModal] = useState(null);
  const [newAddress, setNewAddress] = useState(true);

  const openModal = (title) => {
    setTitleModal(title);
    setFormModal(
      <AddressForm newAddress={newAddress} setShow={setShowModal} />
    );
    setShowModal(true);
  };

  return (
    <div className="edit-me__addresses">
      <div className="title">
        Direcciones
        <Icon name="plus" link onClick={() => openModal("Nueva Dirección")} />
      </div>
      <div className="data">
        <p>lista de direcciones</p>
      </div>
      <BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
        {formModal}
      </BasicModal>
    </div>
  );
}
